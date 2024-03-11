import React, { useEffect, useState } from "react";
import axios, { AxiosInstance } from "axios";
import { LocalStorage } from "./local-storage";
import { createHash } from "./create-hash";
import { HashAlgorithm } from "./create-hash";
import { IWindowLocation } from "./window-location";
import { AuthService } from "./services/auth-service";
import { parseToken } from "./parse-token";
import { TokenOverride } from "./token-override";
import { DecodedID24Claim } from "./models/decoded-id24-claim";
import { OrganizationUserAccess } from "./models/organization-user-access";
import { v4 as uuidv4 } from "uuid";
import { useLocation, useHistory } from "react-router-dom";

type ID24Instance = {
  initialized: boolean;
  authenticated: boolean;
  clientId: string;
  tokenAccess: OrganizationUserAccess;
  id24Axios: AxiosInstance;
  authorize: (redirectUrl: string) => void;
  logout: () => void;
};

const id24DefaultContext: ID24Instance = {
  initialized: false,
  authenticated: false,
  clientId: "",
  tokenAccess: { organizationId: "", userAccess: [] },
  id24Axios: axios.create(),
  authorize: (_redirectUrl: string) => {
    // unimplemented
  },
  logout: () => {
    // unimplemented
  },
};

function getCookie(key: string) {
  var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

const Id24Context = React.createContext(id24DefaultContext);

export type Id24ProviderConfig = {
  organizationId: string;
  clientId: string;
  baseUrl: string;
  authServer: string;
  windowLocation: IWindowLocation;
  overrideUserAccess?: DecodedID24Claim;
};

type Props = {
  children: React.ReactElement;
  config: Id24ProviderConfig;
};

const ChallengeKey = "challenge";

export const Id24Provider: React.FC<Props> = ({
  children,
  config,
}): React.ReactElement => {
  const { overrideUserAccess } = config;

  const axiosConfig = {
    baseURL: config.baseUrl,
    headers: {
      ...(overrideUserAccess && {
        TokenOverride: TokenOverride.encode(overrideUserAccess),
      }),
    },
  };

  const plainAxios = axios.create(axiosConfig);
  const authService = AuthService(plainAxios);

  const hasOverriddenUserAccess = overrideUserAccess !== undefined;
  const defaultId24Instance: ID24Instance = {
    initialized: hasOverriddenUserAccess,
    authenticated: hasOverriddenUserAccess,
    clientId: config.clientId,
    tokenAccess: (overrideUserAccess && overrideUserAccess.access) || {
      organizationId: "",
      userAccess: [],
    },
    id24Axios: plainAxios,
    authorize: (redirectUrl: string) => {
      const challenge = uuidv4();
      LocalStorage.set(ChallengeKey, challenge);
      const codeVerifier = createHash(HashAlgorithm.SHA256, challenge);
      const encodedCodeVerifier = encodeURIComponent(codeVerifier);
      // const encodedRedirectUrl = encodeURIComponent(redirectUrl);
      const encodedRedirectUrl = encodeURIComponent(window.location.origin+"/")
      const authUrl = `${config.authServer}/login?clientId=${config.clientId}&redirectUrl=${encodedRedirectUrl}&codeVerifier=${encodedCodeVerifier}`;
      config.windowLocation.redirect(authUrl);
    },
    logout: async () => {
      await authService.logout();
    },
  };

  const history = useHistory();

  function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
  }

  const [id24Instance, setId24Instance] =
    useState<ID24Instance>(defaultId24Instance);
  const query = useQuery();

  const retrieveAccessTokenFromRefreshToken = async (): Promise<void> => {
    let decodedCookie = getCookie("id24Token");
    authService
      .refreshToken()
      .then((accessToken) => {
        setId24Instance({
          ...defaultId24Instance,
          initialized: true,
          authenticated: true,
          tokenAccess: parseToken(accessToken),
          id24Axios: axios.create({
            ...axiosConfig,
            headers: {
              ...axiosConfig.headers,
              Authorization: `Bearer ${accessToken}`,
            },
          }),
        });
      })
      .catch(
        () =>
          // Fix refreshToken
          decodedCookie
            ? setId24Instance({
                ...defaultId24Instance,
                initialized: true,
                authenticated: true,
                tokenAccess: parseToken(decodedCookie),
                id24Axios: axios.create({
                  ...axiosConfig,
                  headers: {
                    ...axiosConfig.headers,
                    Authorization: `Bearer ${decodedCookie}`,
                  },
                }),
              })
            : setId24Instance({
                ...defaultId24Instance,
                initialized: true,
                authenticated: false,
              })
        // Old refreshToken
        //  setId24Instance({
        //   ...defaultId24Instance,
        //   initialized: true,
        //   authenticated: false,
        // })
      );
  };

  useEffect(() => {
    if (hasOverriddenUserAccess) {
      return;
    }
    const code = query.get("code");
    const challenge = LocalStorage.get<string>(ChallengeKey);
    if (code && challenge) {
      authService
        .exchangeCodeWithToken(config.clientId, code, challenge)
        .then((accessToken) => {
          LocalStorage.set(ChallengeKey, null);
          query.delete("code");
          setId24Instance({
            ...defaultId24Instance,
            initialized: true,
            authenticated: true,
            tokenAccess: parseToken(accessToken),
            id24Axios: axios.create({
              ...axiosConfig,
              headers: {
                ...axiosConfig.headers,
                Authorization: `Bearer ${accessToken}`,
              },
            }),
          });
          const timeout = setTimeout(
            async () => retrieveAccessTokenFromRefreshToken(),
            60000000
          );
          history.replace({
            search: query.toString(),
          });
          return () => clearTimeout(timeout);
        })
        .catch(() => {
          setId24Instance({
            ...defaultId24Instance,
            initialized: true,
            authenticated: false,
          });
        });
    } else {
      retrieveAccessTokenFromRefreshToken().then((_result) => {
        /**/
      });
      const timeout = setTimeout(
        async () => retrieveAccessTokenFromRefreshToken(),
        60000000
      );
      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <Id24Context.Provider value={id24Instance}>{children}</Id24Context.Provider>
  );
};

export const useId24 = () => React.useContext(Id24Context);

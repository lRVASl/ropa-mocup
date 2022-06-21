import jwt, { JwtPayload } from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import crypto from "crypto";
import axios from "axios";
import { UserRole } from "../models/user-role";
import dayjs from "dayjs";

function createHash(plain: string) {
  return crypto.createHash("sha256").update(plain).digest("base64");
}

export type Auth24Payload = JwtPayload & {
  employeeId: string;
  "csm-service": {
    roles: UserRole[];
    groups: UserRole[];
  };
};

export type User = {
  employeeId: string;
  email: string;
  name: string;
  groups: string[];
  roles: string[];
  positionName?: string;
  groupName1?: string;
  groupName2?: string;
  groupName3?: string;
  createdAt: string;
  updatedAt: string;
  is_active: boolean;
};
export interface TokenResponse {
  access_token: string;
  refreshToken: string;
}

export type Auth24 = {
  token: () => {
    rawToken: string | null;
    parsedPayload: Auth24Payload | null;
  };
  login: () => void;
  authenticated: () => boolean;
  logout: (path?: string) => void;
  unAuthenticated: (path?: string) => void;
  refreshToken: () => Promise<string>;
  setAccessToken: (accessToken: string) => void;
  setRefreshToken: (refreshToken: string) => void;
  getRefreshToken: () => string | null;
  getRefreshTTL: () => number;
  getOwnDetails: () => Promise<User>;
};

export const useAuth24 = () => {
  const auth24TokenKey = "auth24Token";
  const auth24RefreshTokenKey = "auth24RefreshToken";
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const authUrl = process.env.REACT_APP_AUTH_URL;
  const meUrl = authUrl?.replace("api/auth", "api") + "/me";
  const redirectUrl = window.location.origin;

  const auth24: Auth24 = {
    token: () => {
      const rawToken = localStorage.getItem(auth24TokenKey);
      const decodedToken =
        (rawToken && jwt.decode(rawToken, { json: true, complete: true })) ||
        null;
      const parsedPayload = (decodedToken?.payload as Auth24Payload) || null;
      return {
        rawToken: rawToken || null,
        parsedPayload,
      };
    },
    login: () => {
      const state = uuidv4();
      localStorage.setItem("state", state);

      const codeVerifier = uuidv4();
      localStorage.setItem("code_verifier", codeVerifier);

      const codeChallenge = createHash(codeVerifier);

      window.location.href = `${authUrl}/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUrl}&scope=read&state=${state}&code_challenge=${codeChallenge}`;
    },
    authenticated: () => {
      const rawToken = localStorage.getItem(auth24TokenKey);
      if (!rawToken) return false;
      const { exp } = jwt.decode(rawToken, { json: true }) as JwtPayload;
      if (exp && Date.now() >= exp * 1000) {
        return false;
      }
      return true;
    },
    logout: (path?: string) => {
      localStorage.removeItem(auth24TokenKey);
      localStorage.removeItem(auth24RefreshTokenKey);
      window.location.href = path || redirectUrl;
    },
    unAuthenticated: (path?: string) => {
      if (
        localStorage.getItem(auth24TokenKey) ||
        localStorage.getItem(auth24RefreshTokenKey)
      ) {
        localStorage.removeItem(auth24TokenKey);
        localStorage.removeItem(auth24RefreshTokenKey);
        window.location.href = path || redirectUrl;
      }
    },
    setAccessToken: (accessToken: string) =>
      localStorage.setItem(auth24TokenKey, accessToken),
    setRefreshToken: (refreshToken: string) =>
      localStorage.setItem(auth24RefreshTokenKey, refreshToken),
    getRefreshToken: () => localStorage.getItem(auth24RefreshTokenKey),
    getRefreshTTL: () => {
      const REFRESH_BEFORE_EXPIRE_IN_SECOND = 10;
      const { parsedPayload } = auth24.token();
      if (parsedPayload?.exp) {
        const ttl =
          dayjs
            .duration(dayjs(parsedPayload.exp * 1000).diff(dayjs()))
            .asSeconds() - REFRESH_BEFORE_EXPIRE_IN_SECOND;
        // console.log(`next refresh in ttt(ms) ${ttl}`)
        return ttl * 1000;
      }
      return 0;
    },
    async refreshToken() {
      const { data } = await axios.post<TokenResponse>(
        `${authUrl}/refresh`,
        {
          refreshToken: auth24.getRefreshToken(),
          clientId: clientId,
        },
        { headers: { Authorization: `Bearer ${auth24.token().rawToken}` } }
      );
      auth24.setAccessToken(data.access_token);
      auth24.setRefreshToken(data.refreshToken);

      return data.access_token;
    },
    async getOwnDetails() {
      const { data } = await axios.get<User>(meUrl, {
        headers: { Authorization: `Bearer ${auth24.token().rawToken}` },
      });

      return data;
    },
  };

  return {
    initialized: true,
    auth24,
  };
};

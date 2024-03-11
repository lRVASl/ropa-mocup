import React, { useEffect, useState } from "react";
import { useId24Instance } from "./Id24-instance-provider";
import { OrganizationUserAccess } from "./models/organization-user-access";
import axios, { AxiosInstance } from "axios";
import { Id24State } from "./Id24";
// import { SetSessionTimeOutService } from "./../../screens/setSessionTimeOut/service/service";
// import { TimeSetService } from "./../../screens/timesetting/services/timeset-service";
import { loadAppConfig } from "../../config/app-config";
// import { ShutdownPage } from "../../layouts/ShutdownPage";
import dayjs from "dayjs";
const appConfig = loadAppConfig();

type Id24ProviderConfig = {
  refreshTokenIntervalInSeconds: number;
  resourceApiBaseUrl: string;
};

export type ProviderProps = {
  children: React.ReactElement;
  config: Id24ProviderConfig;
};

type UseId24Context = {
  authenticated: boolean;
  tokenAccess: OrganizationUserAccess | null;
  id24Axios: (baseURL?: string) => AxiosInstance;
  login: (redirectUrl: string) => void;
  logout: () => Promise<void>;
};

const defaultContext: UseId24Context = {
  authenticated: false,
  tokenAccess: null,
  id24Axios: (baseURL?: string) => axios.create({ baseURL }),
  login: (redirectUrl: string) => {
    throw new Error("Cannot log in now");
  },
  logout: async () => {
    throw new Error("Cannot log out now");
  },
};

const Id24Context = React.createContext<UseId24Context>(defaultContext);

export const Id24Provider: React.FC<ProviderProps> = ({ children, config }): React.ReactElement => {
  //   const { instance: id24Instance, authenticationHelper } = useId24Instance();
  //   const [getTimeSet, setTimeSet] = useState<any>([]);
  //   const [getdatalenght, setdatalenght] = useState<number>();
  //   const [getLoading, setLoading] = useState<boolean>(false);
  //   const [coords, setCoords] = useState({ x: 0, y: 0 });

  //   const [id24ContextValue, setId24ContextValue] = useState({
  //     ...defaultContext,
  //     authenticated: id24Instance.state === Id24State.Authorized,
  //     id24Axios: (baseURL?: string) =>
  //       axios.create({
  //         baseURL: baseURL || config.resourceApiBaseUrl,
  //         ...(id24Instance.state === Id24State.Authorized
  //           ? {
  //               headers: {
  //                 Authorization: `Bearer ${id24Instance.rawAccessToken}`,
  //               },
  //             }
  //           : {}),
  //       }),
  //     tokenAccess: (id24Instance.state === Id24State.Authorized && id24Instance.tokenAccess) || null,
  //     login: authenticationHelper.authorize,
  //     logout: async () => {
  //       await authenticationHelper.logout();
  //       const helper: any = authenticationHelper;
  //       helper.reloadPage();
  //     },
  //   });

  //   function getCookie(key: string) {
  //     var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  //     return b ? b.pop() : "";
  //   }
  //   useEffect(() => {
  //     if (id24Instance.state === Id24State.Authorized) {
  //       let count = 0;
  //       const renewTokenTask = setInterval(async () => {
  //         let processSessionTimeout: string | undefined = getCookie("processSessionTimeout");
  //         if (!processSessionTimeout) {
  //           const apiBaseUrlDebt = id24ContextValue.id24Axios(appConfig.apiBaseUrlDebt);

  //           const res: any = await SetSessionTimeOutService(apiBaseUrlDebt).getTimeout();

  //           if (res) {
  //             const dIf = new Date();
  //             dIf.setTime(dIf.getTime() + 1 * 24 * 60 * 60 * 1000);
  //             document.cookie = "processSessionTimeout=" + res[0].sesstionTime + ";expires=" + dIf.toUTCString() + ";path=/";
  //           } else {
  //             const dIf = new Date();
  //             dIf.setTime(dIf.getTime() + 1 * 24 * 60 * 60 * 1000);
  //             document.cookie = "processSessionTimeout=15;expires=" + dIf.toUTCString() + ";path=/";
  //           }
  //         }

  //         let autoTimeOut: string | undefined = getCookie("autoTimeOut");
  //         if (autoTimeOut) {
  //           let checkTimeOut = Date.parse(autoTimeOut);
  //           // let checkTimeOut = Date.parse(autoTimeOut);
  //           let checkCurrentTime = Date.parse(autoTimeOut);
  //           if (Number(checkTimeOut) >= Number(checkCurrentTime)) {
  //             authenticationHelper.renewAccessToken().then((tokenInfo) => {
  //               if (tokenInfo) {
  //                 setId24ContextValue({
  //                   ...id24ContextValue,
  //                   tokenAccess: tokenInfo.tokenAccess,
  //                   id24Axios: (baseURL?: string) =>
  //                     axios.create({
  //                       baseURL: baseURL || config.resourceApiBaseUrl,
  //                       headers: {
  //                         Authorization: `Bearer ${tokenInfo.rawAccessToken}`,
  //                       },
  //                     }),
  //                 });
  //               } else {
  //                 setId24ContextValue({
  //                   ...id24ContextValue,
  //                   authenticated: false,
  //                   tokenAccess: null,
  //                 });
  //               }
  //             });
  //           }
  //         } else {
  //           const dIf = new Date();
  //           dIf.setTime(dIf.getTime() + -1 * 24 * 60 * 60 * 1000);
  //           document.cookie = "id24Token=0;expires=" + dIf.toUTCString() + ";path=/";
  //           document.cookie = "refresh-token=0;expires=" + dIf.toUTCString() + ";path=/";
  //           document.cookie = "autoTimeOut=0;expires=" + dIf.toUTCString() + ";path=/";
  //           authenticationHelper.logout().then(() => {
  //             const helper: any = authenticationHelper;
  //             helper.reloadPage();
  //           });
  //         }
  //       }, config.refreshTokenIntervalInSeconds * 1000);

  //       return () => {
  //         clearTimeout(renewTokenTask);
  //       };
  //     }
  //   }, []);

  //   useEffect(() => {
  //     const dataresultroles = id24ContextValue?.tokenAccess?.userAccess.filter((e: any) => e.groupName === "Organization Admin");
  //     setdatalenght(dataresultroles?.length);
  //     async function TimeSetting() {
  //       const apiBaseUrlUser = await id24ContextValue.id24Axios(appConfig.apiBaseUrlUser);
  //       TimeSetService(apiBaseUrlUser)
  //         .getTimeSetting()
  //         .then((result) => {
  //           setTimeSet(
  //             result?.map((event: any) => {
  //               return event;
  //             }),
  //           );
  //           setLoading(true);
  //         });
  //     }
  //     TimeSetting();
  //     const handleWindowMouseMove = (event: any) => {
  //       setCoords({
  //         x: event.clientX,
  //         y: event.clientY,
  //       });
  //     };
  //     window.addEventListener("mousemove", handleWindowMouseMove);

  //     return () => {
  //       window.removeEventListener("mousemove", handleWindowMouseMove);
  //     };
  //   }, [getLoading, getdatalenght]);

  //   let Time = new Date();
  //   if (getLoading === true) {
  //     const timeStart = dayjs(getTimeSet[0]?.startTime).format("HH:mm:00");
  //     const timeEnd = dayjs(getTimeSet[0]?.endTime).format("HH:mm:00");
  //     const timeNow = dayjs(Time).format("HH:mm:ss");

  //     if (timeStart <= timeNow && timeNow < timeEnd && (coords.x !== 0 || coords.y !== 0 || coords.x === 0 || coords.y === 0)) {
  //       return <Id24Context.Provider value={id24ContextValue}>{children}</Id24Context.Provider>;
  //     } else {
  //       if (getdatalenght !== 1 && (coords.x !== 0 || coords.y !== 0)) {
  //         return (
  //           <Id24Context.Provider value={id24ContextValue}>
  //             <ShutdownPage />
  //           </Id24Context.Provider>
  //         );
  //       } else if (getdatalenght !== 1 && (coords.x === 0 || coords.y === 0)) {
  //         return (
  //           <Id24Context.Provider value={id24ContextValue}>
  //             <ShutdownPage />
  //           </Id24Context.Provider>
  //         );
  //       } else {
  //         return <Id24Context.Provider value={id24ContextValue}>{children}</Id24Context.Provider>;
  //       }
  //     }
  //   }
  //   return <Id24Context.Provider value={id24ContextValue}>{children}</Id24Context.Provider>;
  return <></>;
};
export const useId24 = () => React.useContext<UseId24Context>(Id24Context);

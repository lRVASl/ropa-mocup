import React, {useEffect, useState} from "react"
import {useId24Instance} from "./Id24-instance-provider"
import {OrganizationUserAccess} from "./models/organization-user-access"
import axios, {AxiosInstance} from "axios"
import {Id24State} from "./Id24"

type Id24ProviderConfig = {
  refreshTokenIntervalInSeconds: number
  resourceApiBaseUrl: string
}

export type ProviderProps = {
  children: React.ReactElement
  config: Id24ProviderConfig
}

type UseId24Context = {
  authenticated: boolean
  tokenAccess: OrganizationUserAccess | null
  id24Axios: (baseURL?: string) => AxiosInstance
  login: (redirectUrl: string) => void
  logout: () => Promise<void>
}

const defaultContext: UseId24Context = {
  authenticated: false,
  tokenAccess: null,
  id24Axios: (baseURL?: string) => axios.create({ baseURL }),
  login: (redirectUrl: string) => { throw new Error("Cannot log in now") },
  logout: async () => { throw new Error("Cannot log out now") }
}

const Id24Context = React.createContext<UseId24Context>(defaultContext)

export const Id24Provider: React.FC<ProviderProps> = ({
  children,
  config
}): React.ReactElement => {
  const { instance: id24Instance, authenticationHelper } = useId24Instance()

  const [id24ContextValue, setId24ContextValue] = useState({
    ...defaultContext,
    authenticated: id24Instance.state === Id24State.Authorized,
    id24Axios: (baseURL?: string) => axios.create({
      baseURL: baseURL || config.resourceApiBaseUrl,
      ...(id24Instance.state === Id24State.Authorized ? { headers: { Authorization: `Bearer ${id24Instance.rawAccessToken}` } } : {} )
    }),
    tokenAccess: (id24Instance.state === Id24State.Authorized && id24Instance.tokenAccess) || null,
    login: authenticationHelper.authorize,
    logout: async  () => {
      await authenticationHelper.logout()
      const helper: any = authenticationHelper
      helper.reloadPage()
    },
  })

  function getCookie(key: string) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
  }

  useEffect(() => {
    if(id24Instance.state === Id24State.Authorized) {
      let count = 0;
      const renewTokenTask = setInterval(() => {
        let autoTimeOut:string | undefined= getCookie("autoTimeOut");
        if(autoTimeOut){
          // console.log("autoTimeOut");
          // console.log(Date.parse(autoTimeOut));
          // console.log(Date.parse(String(new Date())));
          // console.log("autoTimeOut");
          
          let checkTimeOut = Date.parse(autoTimeOut) + (4 * 60 * 1000);
          // let checkTimeOut = Date.parse(autoTimeOut);
          let checkCurrentTime = Date.parse(autoTimeOut);
          if(Number(checkTimeOut) >= Number(checkCurrentTime)){
            authenticationHelper.renewAccessToken()
            .then(tokenInfo => {
              if(tokenInfo) {
                setId24ContextValue({
                  ...id24ContextValue,
                  tokenAccess: tokenInfo.tokenAccess,
                  id24Axios: (baseURL?: string) => axios.create({
                    baseURL: baseURL || config.resourceApiBaseUrl,
                    headers: {
                      Authorization: `Bearer ${tokenInfo.rawAccessToken}`
                    }
                  }),
                })
              } else {
                setId24ContextValue({
                  ...id24ContextValue,
                  authenticated: false,
                  tokenAccess: null,
                })
              }
            })
          }
        }else{
          // console.log("count");
          // console.log(count);
          // console.log("count");
          count = count + 1;
          if(count > 3){
            // window.location.reload();
          }
        }
      }, config.refreshTokenIntervalInSeconds * 1000)
      // }, 5 * 1000)
      return () => {
        clearTimeout(renewTokenTask)
      }
    }
  }, [])

  return <Id24Context.Provider value={id24ContextValue}>
    { children }
  </Id24Context.Provider>
}

export const useId24 = () => React.useContext<UseId24Context>(Id24Context)
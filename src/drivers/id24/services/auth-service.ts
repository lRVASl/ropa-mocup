import {AxiosInstance} from "axios"
const clientId: any = process.env.REACT_APP_CLIENT_ID;
type AuthorizeInfo = {
  clientId: string
  redirectUrl: string
  codeVerifier: string
  credential: {
    username: string
    password: string
  }
  rememberMe: boolean
}
type AuthorizationResult = { code?: string, updatePasswordToken?: string }

export type IAuthService = {
  authorize: (authorizationInfo: AuthorizeInfo) => Promise<AuthorizationResult>
  authorizeLdap: (authorizationInfo: AuthorizeInfo) => Promise<AuthorizationResult>
  exchangeCodeWithToken: (clientId: string, code: string, challenge: string) => Promise<string>
  refreshToken: () => Promise<string>
  logout: () => Promise<void>
}

export const AuthService = (axiosInstance: AxiosInstance): IAuthService => ({
  authorize: (authorizationInfo: AuthorizeInfo): Promise<AuthorizationResult> =>
    axiosInstance
      .post("/auth/authorize", authorizationInfo)
      .then(result => {
        return result.data as AuthorizationResult
      })
      .catch(error => {
        const { message } = error.response.data
        if(message) {
          throw new Error(message)
        }
        throw new Error("Something wrong")
      }),
  authorizeLdap: (authorizationInfo: AuthorizeInfo): Promise<AuthorizationResult> =>
    axiosInstance
      .post("/auth/authorize-ldap", authorizationInfo)
      .then(result => {
        return result.data as AuthorizationResult
      })
      .catch(error => {
        const { message } = error.response.data
        if(message) {
          throw new Error(message)
        }
        throw new Error("Something wrong")
      }),
  exchangeCodeWithToken: (clientId: string, code: string, challenge: string) =>
    axiosInstance
      .post(
        "/auth/token",
        {clientId, code, challenge}
      )
      .then(result => result.data.access_token),
  refreshToken: () =>
    axiosInstance
      .get(`/auth/refresh?clientId=${clientId}`)
      .then(result => result.data.access_token),
  logout: () =>
    axiosInstance
      .post(`/auth/logout?clientId=${clientId}`)
})
import {TokenInfo} from "./token-info" 
export type AuthenticationHelper = {
    authorize: (redirectUrl: string) => void
    renewAccessToken: () => Promise<TokenInfo | null>
    logout: () => Promise<void>
    reloadPage: () => void
  }
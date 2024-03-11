import {OrganizationUserAccess} from "./organization-user-access"

export type TokenInfo = {
    tokenAccess: OrganizationUserAccess
    rawAccessToken: string
  }
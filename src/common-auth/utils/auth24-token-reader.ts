import { Auth24 } from './use-auth24'
import { UserRole } from '../models/user-role'

type TokenReader = {
  isUserRoleExists: (userRole: UserRole) => boolean
  hasRole: (userRoles: UserRole[]) => boolean
  doesNotHaveRole: (userRoles: UserRole[]) => boolean
  getEmployeeId: () => string
  getEmployeeGroup: () => string
}

export function createAuth24TokenReader(auth24: Auth24): TokenReader {
  const { parsedPayload } = auth24.token()
  const groups = parsedPayload?.['csm-service'].groups || []
  const roles = parsedPayload?.['csm-service'].roles || []
  const hasRole = (userRoles: UserRole[]): boolean => {
    const inputRoles = new Set(userRoles)

    const union = new Set(roles.filter(role => inputRoles.has(role)))
    return union.size > 0
  }
  return {
    doesNotHaveRole: (userRoles: UserRole[]): boolean => !hasRole(userRoles),
    hasRole,
    isUserRoleExists: (userRole: UserRole): boolean => roles.includes(userRole),
    getEmployeeId: () => parsedPayload?.employeeId || '',
    getEmployeeGroup: () => groups.toString?.() || ''
  }
}

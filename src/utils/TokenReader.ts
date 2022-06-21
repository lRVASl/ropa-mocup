import { UserRole } from "../common-auth";

export type TokenReader = {
  isUserRoleExists: (userRole: UserRole) => boolean;
  hasRole: (userRoles: UserRole[]) => boolean;
  doesNotHaveRole: (userRoles: UserRole[]) => boolean;
  getEmployeeId: () => string;
  getEmployeeGroup: () => string;
};

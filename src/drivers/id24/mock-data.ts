import {UserAccess} from "./models/user-access";
import {OrganizationUserAccess} from "./models/organization-user-access";

export const sampleToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOnsib3JnYW5pemF0aW9uSWQiOiIwNjYyMmRkMy0xNmEzLTRjMTctOTQzZC02MzA5NGUzNmMzNTQiLCJ1c2VyQWNjZXNzIjpbeyJncm91cElkIjoiNmUxNThkNmUtZmE4Yi00MTkzLWI5OGEtZjJmZTM0NDliMGJmIiwiZ3JvdXBOYW1lIjoiT3JnYW5pemF0aW9uIEFkbWluIiwicm9sZXMiOlsib3JnYW5pemF0aW9uLWFkbWluIiwic3VwZXItd29tYW4iXX0seyJncm91cElkIjoiZGY1ZDczMDktZmEzOS00MWQzLWI5NTUtMDljOTRkOGE2YWU2IiwiZ3JvdXBOYW1lIjoiTWFuYWdlciIsInJvbGVzIjpbInRlc3Q1NSJdfV19LCJpYXQiOjE2NTU1NDM2MDYsImV4cCI6MTY1NTU0MzkwNiwiYXVkIjoiOGZhNmIxMjUtMDAxYS00OGIxLThmNzgtMDc3ZjQ4MjAyZDJiIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdC5jb20iLCJzdWIiOiJmNzc4YmMwZS0zMjdmLTRhMWYtOTBjZC05NDE3MGViMjdkMDEifQ.O99yx6z5MApFqgb6EHOB_VqdeW7rBXHgz-Lreout5Iw";
export const sampleGroupAccess: UserAccess[] = [
  {
    groupId: "6e158d6e-fa8b-4193-b98a-f2fe3449b0bf",
    groupName: "Organization Admin",
    roles: ["organization-admin", "super-woman"]
  },
  {
    groupId: "df5d7309-fa39-41d3-b955-09c94d8a6ae6",
    groupName: "Manager",
    roles: ["test55"]
  }
];
export const sampleOrganizationId = "06622dd3-16a3-4c17-943d-63094e36c354";

export const sampleTokenAccess: OrganizationUserAccess = {
  userAccess: sampleGroupAccess,
  organizationId: sampleOrganizationId,
};
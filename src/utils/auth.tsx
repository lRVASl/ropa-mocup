import React, { useState } from "react";

export type Role = "admin" | "user";

export type Roules = "create-event";

type User = {
  id: string;
  roles: Role[];
};

type AuthContextType = {
  user?: User;
  signin: (user: User) => void;
  signout: (cb: VoidFunction) => void;
};

const AuthContext = React.createContext<AuthContextType>({
  signin: () => {},
  signout: () => {},
});

export const useAuth = () => React.useContext(AuthContext);

export const AuthProvider: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const [user, setUser] = useState<User | undefined>();

  return (
    <AuthContext.Provider
      value={{
        user,
        signin: setUser,
        signout: () => {
          setUser(undefined);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

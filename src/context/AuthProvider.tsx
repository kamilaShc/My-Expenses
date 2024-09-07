import React from "react";
import { createContext, ReactNode, useState } from "react";

interface AuthContextType {
  auth: Auth;
  setAuth: React.Dispatch<React.SetStateAction<{}>>;
}

const AuthContext = React.createContext<AuthContextType>({} as AuthContextType);

interface Props {
  children: ReactNode;
}

interface Auth {
  username?: string;
  accessToken?: string;
}

export const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState<Auth>({});

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

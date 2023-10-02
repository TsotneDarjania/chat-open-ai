"use client";

import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type User = {
  isLogged: boolean;
  setIsLogged: Dispatch<SetStateAction<boolean>>;
};

export const AuthContext = createContext<User>({
  isLogged: false,
  setIsLogged: () => {},
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

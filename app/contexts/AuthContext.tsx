"use client";

import React, { createContext, useContext } from "react";

type User = {
  registration: (email: string,password: string) => void;
};

export const AuthContext = createContext<User>({
  registration: () => {},
});

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const registration = (name: string) => {};
  return (
    <AuthContext.Provider value={{ registration }}>
      {children}
    </AuthContext.Provider>
  );
}

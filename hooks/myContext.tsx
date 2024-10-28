"use client";
import { createContext, useContext } from "react";

export const AuthContext = createContext({});

import { ReactNode } from "react";

export function AuthProvider({ children }: { children: ReactNode }) {
  async function signIn({ email, password }) {
    try {
      const response = await fetch("http://localhost:3333/api/auth");
      console.log(response);
    } catch (error) {}
  }

  return (
    <AuthContext.Provider value={{ signIn }}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}

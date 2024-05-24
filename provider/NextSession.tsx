"use client";
import { SessionProvider } from "next-auth/react";

export interface NextSessionProps {
  children: React.ReactNode;
}

export function NextSession(props: NextSessionProps) {
  const { children } = props;

  return <SessionProvider>{children}</SessionProvider>;
}

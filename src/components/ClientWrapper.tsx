"use client";

import PasswordGate from "./PasswordGate";
import { ThemeProvider } from "./ThemeProvider";

interface ClientWrapperProps {
  children: React.ReactNode;
}

export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <ThemeProvider>
      <PasswordGate>{children}</PasswordGate>
    </ThemeProvider>
  );
}

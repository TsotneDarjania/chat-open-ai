"use client";
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useState,
} from "react";

type App = {
  warningIsOpen: boolean;
  setWarningIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  warningProps: { title: string; text: string };
  setWarningProps: Dispatch<SetStateAction<{ title: string; text: string }>>;
};

export const AppContext = createContext<App>({
  warningIsOpen: false,
  warningProps: { title: "", text: "" },
  setWarningIsOpen: () => {},
  setWarningProps: () => {},
});

export default function AppProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [warningIsOpen, setWarningIsOpen] = useState(false);
  const [warningProps, setWarningProps] = useState({
    title: "",
    text: "",
  });

  return (
    <AppContext.Provider
      value={{
        warningIsOpen,
        setWarningIsOpen,
        warningProps,
        setWarningProps,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

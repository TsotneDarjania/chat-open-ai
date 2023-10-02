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
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<App>({
  warningIsOpen: false,
  warningProps: { title: "", text: "" },
  setWarningIsOpen: () => {},
  setWarningProps: () => {},
  loading: false,
  setLoading: () => {},
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
  const [loading, setLoading] = useState(false);

  return (
    <AppContext.Provider
      value={{
        warningIsOpen,
        setWarningIsOpen,
        warningProps,
        setWarningProps,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

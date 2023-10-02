"use client";

import { useContext, useState } from "react";
import { AppContext } from "../contexts/AppContext";

const useWarning = () => {
  const pageContext = useContext(AppContext);
  const warningIsOpen = pageContext.warningIsOpen;
  const warninProps = pageContext.warningProps;

  function openWarning(title: string, text: string) {
    pageContext.setWarningIsOpen(true);
    pageContext.setWarningProps({ title, text });
  }

  return { openWarning, pageContext };
};

export default useWarning;

"use client";

import { Loading } from "@/app/components";
import useAuth from "@/app/hooks/useAuth";
import useWarning from "@/app/hooks/useWarning";
import React from "react";

const page = () => {
  const { exit } = useAuth();
  const { pageContext } = useWarning();
  return (
    <div>
      {pageContext.loading && <Loading />}
    </div>
  );
};

export default page;

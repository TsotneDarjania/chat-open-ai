"use client";

import { useRouter } from "next/navigation";
import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { Authentication, Introduce } from "./(pages)";
import { Loading } from "./components";
import appwrite from "@/services/appwrite/appwrite";
import useWarning from "./hooks/useWarning";

export default function Home() {
  const router = useRouter();
  const { authContext } = useAuth();
  const { pageContext } = useWarning();

  appwrite.getLoginStatus().then((res) => {
    authContext.setIsLogged(res);
    if (authContext.isLogged) {
      router.push("/main");
    } else {
      setTimeout(() => {
        pageContext.setLoading(false);
      }, 1000);
    }
  });

  return (
    <main className="h-screen ">
      {pageContext.loading ? (
        <Loading />
      ) : (
        <div>
          <Introduce />
          <Authentication />
        </div>
      )}
    </main>
  );
}

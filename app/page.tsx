"use client";

import useAuth from "./hooks/useAuth";
import { useState } from "react";
import { Authentication, Introduce } from "./(pages)";
import { Loading } from "./components";
import appwrite from "@/services/appwrite/appwrite";
import { account } from "@/services/appwrite/config";

export default function Home() {
  const { authContext } = useAuth();
  const [loading, setloading] = useState(true);

  appwrite.getLoginStatus().then((res) => authContext.setIsLogged(res));

  return (
    <main className="h-screen ">
      {loading ? (
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

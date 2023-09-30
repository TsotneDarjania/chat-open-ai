"use client";

import useAuth from "./hooks/useAuth";
import useSWR from "swr";
import { Authentication, Introduce } from "./(pages)";
import { Loading } from "./components";

export default function Home() {
  const { checkLogin } = useAuth();

  const { data, error } = useSWR("checkLogin", checkLogin);

  if (!data) {
    return <Loading />;
  }

  return (
    <main className="h-screen ">
      <Introduce />
      <Authentication />
    </main>
  );
}

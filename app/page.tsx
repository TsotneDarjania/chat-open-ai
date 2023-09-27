import Image from "next/image";
import { Authentication, Introduce } from "./pages";
import AuthProvider from "./contexts/AuthContext";
import PageProvider from "./contexts/AppContext";

export default function Home() {
  return (
    <main className="h-screen ">
      <PageProvider>
        <AuthProvider>
          <Introduce />
          <Authentication />
        </AuthProvider>
      </PageProvider>
    </main>
  );
}

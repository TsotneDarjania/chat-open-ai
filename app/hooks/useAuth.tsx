"use client";

import { account } from "../../services/appwrite/config";
import { ID } from "appwrite";
import { useContext } from "react";
import isEmail from "validator/lib/isEmail";
import { AuthContext } from "../contexts/AuthContext";
import useWarning from "./useWarning";
import appwrite from "@/services/appwrite/appwrite";

import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { openWarning, pageContext } = useWarning();

  function exit() {
    pageContext.setLoading(true);
    appwrite.exit().then((res) => {
      console.log(res);
      authContext.setIsLogged(false);
      router.push("/");
    });
  }

  async function authentication(email: string, password: string) {
    if (!isEmail(email)) {
      openWarning("Warning", "Please provide the correct email address. ");
      return;
    }

    if (password.length < 8) {
      openWarning(
        "Warning",
        "Passwords must consist of at least 8 characters."
      );

      return;
    }

    pageContext.setLoading(true);

    appwrite.registration(email, password).then(
      (res) => {
        console.log(res);
        login(email, password);
      },
      (err) => {
        console.log(err);
        if (err.code === 409) {
          login(email, password);
        }
      }
    );

    function login(email: string, password: string) {
      router.push("/main");

      appwrite.login(email, password).then(
        (res) => {},
        (err) => {
          console.log(err);
        }
      );

      setTimeout(() => {
        pageContext.setLoading(false);
      }, 1500);
    }
  }

  return { authentication, authContext, exit };
}

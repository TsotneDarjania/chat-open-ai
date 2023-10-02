"use client";

import { account } from "../../services/appwrite/config";
import { ID } from "appwrite";
import { useContext } from "react";
import isEmail from "validator/lib/isEmail";
import { AuthContext } from "../contexts/AuthContext";
import useWarning from "./useWarning";
import { error, log } from "console";
import { useRouter } from "next/navigation";

export default function useAuth() {
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const { openWarning } = useWarning();

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

    try {
      const res = await account.get();
      if (res) {
        // User is logging in
        console.log("user is already loggin");
      }
    } catch (error: any) {
      if (error.code === 401) {
        account.create(ID.unique(), email, password).then(
          (res) => {
            account.createEmailSession(email, password);
          },
          (err) => {
            console.log(err);
            if (err.code === 409) {
              account.createEmailSession(email, password);
            }
          }
        );
      }
    }
  }

  return { authentication, authContext };
}

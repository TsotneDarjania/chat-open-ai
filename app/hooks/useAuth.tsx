import { account } from "../../services/appwrite/appwrite";
import { ID } from "appwrite";
import { useContext } from "react";
import isEmail from "validator/lib/isEmail";
import { AuthContext } from "../contexts/AuthContext";
import useWarning from "./useWarning";

export default function useAuth() {
  const authContext = useContext(AuthContext);
  const { openWarning } = useWarning();

  function registration(email: string, password: string) {
    if (!isEmail(email)) {
      openWarning("Warning", "Please enter correct email ");
      return;
    }

    account.create(ID.unique(), email, password).then(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

  return { registration };
}

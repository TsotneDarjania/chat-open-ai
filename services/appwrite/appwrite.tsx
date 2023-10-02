import { ID } from "appwrite";
import { account } from "./config";

const appwrite = {
  registration: (email: string, password: string) => {
    return account.create(ID.unique(), email, password).then(
      (res) => {},
      (err) => {}
    );
  },
  login: (email: string, password: string) => {
    return account.createEmailSession(email, password);
  },
  getLoginStatus: async () => {
    try {
      const data = await account.get();
      return Boolean(data);
    } catch (error) {}

    return false;
  },
};

export default appwrite;

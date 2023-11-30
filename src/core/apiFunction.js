import { t } from "testcafe";
import { auth, client } from "./restAPI.js";
import { Credentials } from "../../test/data/credentials.js";
import {
  BASE_API_URL,
  uniqueEmail,
  uniquePassword,
  uniqueUserName,
} from "./helpers/util.js";

export const API = {
  auth: async () => {
    const authResponse = await auth(Credentials.userLogin);
    const { token } = authResponse;
    t.ctx.token = token;
    console.log(
      "Login auth success with code status is: ",
      authResponse.res.status
    );
    return authResponse;
  },
  registerUser: async () => {
    const jwt = "";
    const data = {
      user: {
        email: uniqueEmail,
        password: uniquePassword,
        username: uniqueUserName,
      },
    };
    const resData = await client.post(`${BASE_API_URL}/api/users`, jwt, data);
    console.log("Register successfully with status: ", resData.status);
    return resData;
  },
  getUserInfo: async (jwt) => {
    return await client.post(`${BASE_API_URL}/users`, jwt);
  },
};

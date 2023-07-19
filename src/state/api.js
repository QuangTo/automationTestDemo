import { t } from 'testcafe';
import { auth, baseAPI } from '../api/base';
import { BASE_API, uniqueEmail, uniquePassword, uniqueUserName } from '../helpers/util';

// user credential
const data = {
    user: {
        email: "123qwesad123@gmail.com",
        password: "123qwesad123@gmail.com"
    }
}

export const API = {
    auth: async () => {
        const authResponse = await auth(data);
        const { token } = authResponse;
        t.ctx.token = token;
        return authResponse;
    },
    registerUser: async () => {
        const data = {
            user: {
                email: uniqueEmail,
                password: uniquePassword,
                username: uniqueUserName
            }
        };
        return await baseAPI.post(`${BASE_API}/users`, data);
    },
    getUserInfo: async (jwt) => {
        return await baseAPI.post(`${BASE_API}/users`, jwt);
    }
}
import { t } from 'testcafe';
import { auth } from '../api/base';

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
    }
}
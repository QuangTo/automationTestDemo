// api source : https://github.com/gothinkster/realworld/blob/main/api/openapi.yml

import axios from 'axios'
import { BASE_API } from '../helpers/util'

const buildHeader = (JWT) => (JWT ? { Authorization: `Token ${JWT}` } : {});

export const auth = async (data = {}) => {
    try {
        const res = await axios.post(
            `${BASE_API}/api/users/login`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
            },
        );
        const token = res.data.user.token;
        return { token, res };
    } catch (error) {
        console.log('Error');
    }
}

export const baseAPI = {
    get: async (endpoint, jwt) => {
        const header = buildHeader(jwt);
        try {
            return await axios.get(
                endpoint,
                { header }
            );
        } catch (error) {
            console.log(error);
        }
    },
    post: async (endpoint, jwt, data = {}) => {
        const header = buildHeader(jwt);
        try {
            return await axios.post(
                endpoint,
                data,
                { header }
            );
        } catch (error) {
            console.log(error);
        }
    }
}

// api source : https://github.com/gothinkster/realworld/blob/main/api/openapi.yml

import axios from 'axios'
import { BASE_API } from '../helpers/util'

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

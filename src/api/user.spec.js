import { t } from 'testcafe';
import { API } from '../state/api.js';

fixture(`Test user api`);

test('Existing user login successfully', async () => {
    const res = await API.auth();
    await t.expect(res.res.status).eql(200);
})
test('Register new user', async () => {
    const res = await API.registerUser();
    await t.expect(res.status).eql(201);
    await t.expect(res.data.user.email).contains('@gmail.com');
})
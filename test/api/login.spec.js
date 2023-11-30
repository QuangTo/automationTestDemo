import { t } from "testcafe";
import { API } from "../../src/core/apiFunction";

fixture(`Test login api`);

test("Existing user login successfully", async () => {
  const res = await API.auth();
  await t.expect(res.res.status).eql(200);
});
test("Register new user", async () => {
  const res = await API.registerUser();
  await t.expect(res.status).eql(201);
  await t.expect(res.data.user.email).contains(".com");
});

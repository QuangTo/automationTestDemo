import { Login } from "../../src/pageObjectModel/Pages/Login";
import {
  BASE_URL,
  uniqueEmail,
  uniqueUserName,
  uniquePassword,
} from "../../src/core/helpers/util";

fixture("Test").page(`${BASE_URL}`);

test.before(async (t) => {
  await t.navigateTo(`/#/register`);
})("Verify that the user can create an account successfully", async () => {
  await Login.enterUserName(uniqueUserName);
  await Login.enterEmail(uniqueEmail);
  await Login.enterPassWord(uniquePassword);
  await Login.clickSignIn();
  await Login.seeHomePage();
});

test.before(async (t) => {
  await t.navigateTo(`/#/login`);
})(
  "Verify that a user cannot log in when entering a wrong email address or password",
  async () => {
    await Login.enterEmail("wronguserEmail@gmail.com");
    await Login.enterPassWord("wrongPassword");
    await Login.clickSignIn();
    await Login.seeErrorMessage();
  }
);

import { Page } from "./Page";
import { BASE_URL, uniqueEmail, uniqueUserName, uniquePassword } from "./util";

fixture('Test')
  .page(`${BASE_URL}`);

test.before(async t => {
  await t.navigateTo(`/#/register`);
})('Verify that the user can create an account successfully', async() => {
  await Page.enterUserName(uniqueUserName);
  await Page.enterEmail(uniqueEmail);
  await Page.enterPassWord(uniquePassword);
  await Page.clickSignIn();
  await Page.seeHomePage();
});

test.before(async t => {
  await t.navigateTo(`/#/login`);
})
('Verify that a user cannot log in when entering a wrong email address or password', async() => {
  await Page.enterEmail('wronguserEmail@gmail.com');
  await Page.enterPassWord('wrongPassword');
  await Page.clickSignIn();
  await Page.seeErrorMessage();
});
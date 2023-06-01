import { BASE_URL } from "./util";
fixture('Test')
  .page(`${BASE_URL}/#/register?_k=8rbebk`);

  test('Verify that the user can create an account successfully', async() => {
  //
});

test('Verify that a user cannot log in when entering a wrong email address or password', async() => {
  //
});
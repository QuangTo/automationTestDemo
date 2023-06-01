import { Selector, t } from "testcafe"

export const Page = {

   enterUserName: async(user)=>{
    const userName = Selector('input').withAttribute('placeholder','Username');
    await t.typeText(userName, user);
   },

   enterEmail: async(email)=>{
    const emailInput = Selector('input').withAttribute('placeholder','Email');
    await t.typeText(emailInput, email);
   },

   enterPassWord: async(pwd)=>{
    const password = Selector('input').withAttribute('placeholder','Password');
    await t.typeText(password, pwd);
   },

   clickSignIn: async()=>{
    const button = Selector('button').withText('Sign in');
    await t.click(button);
   },

   homePage: async()=>{
    const newFeed = Selector('a').withText('Your Feed');
    await t.expect(newFeed.exists).ok();
   },

   seeErrorMessage: async()=>{
    const errorMsg = Selector('.error-messages');
    await t.expect(errorMsg.exists).ok();
   }
} 

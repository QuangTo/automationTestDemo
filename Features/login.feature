Feature Fature: User login

Background: A user doesn't have account on system 

Scenario: A user register successfully 
Given I am on register page 
And I am input all correct info
When I click register
Then I see sucessfull message 
And I am automatically redirect to Home page

Scenario: Login failed due to incorrect account 
Given my account doesnt exist in system
When I input into the form following 
| Email | Passowrd | 
| 123q@gmail.com | 123qwesad123@gmail.com |
And click Login 
Then I see error message
import HomePage from "../../pages/HomePage";
import SignUpPage from "../../pages/SignUpPage";
import ProfilePage from "../../pages/ProfilePage";

describe('Validate the new user registration', () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto"
      }
    });
    HomePage.signUp();
  });

  it('Verify that the user with correct data can be registered', () => {
        cy.fixture("signUpE2E").then((data)=>{
            const user = data.validUser;
            const random6Numbers = Math.floor(100000 + Math.random() * 900000);
            const email = user.email.replace('{random6numbers}', random6Numbers);
      
            SignUpPage.enterName(user.firstName);
            SignUpPage.enterLastName(user.lastName);
            SignUpPage.enterEmail(email);
            SignUpPage.enterPassword(user.password);
            SignUpPage.reEnterPassword(user.password);
            SignUpPage.clickRegister();
            ProfilePage.getProfileButton().should('exist');
        })
    });

    it('Verify that the user with incorect data can not be registered', () => {
        cy.fixture("signUpE2E").then((data)=>{
            const invalidUser = data.invalidUser;
            SignUpPage.enterName(invalidUser.firstName);
            SignUpPage.enterLastName(invalidUser.lastName);
            SignUpPage.enterEmail(invalidUser.email);
            SignUpPage.enterPassword(invalidUser.password);
            SignUpPage.reEnterPassword(invalidUser.password);
            SignUpPage.getRegisterButton().should('be.disabled');
        })

    });

    it('Verify that the user with empty data can not be registered', () => {
        SignUpPage.getName().click();
        SignUpPage.getLastName().click();
        SignUpPage.getEmail().click();
        SignUpPage.getPassword().click();
        SignUpPage.getReEnterPassword().click();
        SignUpPage.getRegisterButton().should('be.disabled');
    });


  });
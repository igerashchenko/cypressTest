import LoginPage from "/cypress/pages/LoginPage.js";
import ProfilePage from "/cypress/pages/ProfilePage.js";

Cypress.Commands.add('login', (email, password) => {
    LoginPage.getSignInButton().click();
    LoginPage.getEmail().type(email);
    LoginPage.getPassword().type(password);
    LoginPage.getLoginButton().click();
    ProfilePage.getProfileButton().should('exist');
  });
import LoginPage from "/cypress/pages/LoginPage.js";
import ProfilePage from "/cypress/pages/ProfilePage.js";

Cypress.Commands.add('login', (email, password) => {
    LoginPage.getSignInButton().click();
    LoginPage.getEmail().type(email);
    LoginPage.getPassword().type(password, { sensitive: true });
    LoginPage.getLoginButton().click();
    ProfilePage.getProfileButton().should('exist');
  });

Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    options.log = false
    Cypress.log({
      $el: element,
      name: 'type',
      message: '*'.repeat(text.length),
    })
  }

  return originalFn(element, text, options)
})
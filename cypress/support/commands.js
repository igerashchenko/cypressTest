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

Cypress.Commands.add('createExpense', (expenseData) => {
  cy.log('API Request:', JSON.stringify(expenseData, null, 2)); // Log request payload
  const email = Cypress.config('users').email;
  const password = Cypress.config('users').password;
 
cy.signIn(email, password, false);

  return cy.request({
    method: 'POST',
    url: '/api/expenses',
    auth: {
      username: "guest",
      password: "welcome2qauto"
    },
    body: expenseData,
    failOnStatusCode: false,
    log: true 
  });
});

Cypress.Commands.add('signIn', (email, password, remember) => {
  return cy.request({
    method: 'POST',
    url: '/api/auth/signin', 
    body: {
      email,
      password,
      remember
    },
    failOnStatusCode: false 
  }).then((response) => {
    return response;
  });
});
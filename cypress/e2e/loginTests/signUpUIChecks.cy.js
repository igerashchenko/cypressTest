import HomePage from "../../pages/HomePage";
import SignUpPage from "../../pages/SignUpPage";

describe('Validate the "Name" field inputs on the "Sign Up" form', () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto"
      }
    });
    HomePage.signUp();
  });

  it('Verify that the "Name" field is mandatory', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.getName().click().blur();
      SignUpPage.getNameError().should('have.text', data.name.errorMessages.required);
      SignUpPage.getName().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Name" field accepts valid input', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterName(data.name.valid);
      SignUpPage.getLastName().click();
      SignUpPage.getName().should('have.css', 'border-color', data.borderColors.success);
    });
  });

  it('Verify that the "Name" field rejects invalid input (non-English symbols)', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterName(data.name.invalidNonEnglish);
      SignUpPage.getLastName().click();
      SignUpPage.getNameError().should('have.text', data.name.errorMessages.invalid);
      SignUpPage.getName().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Name" field rejects input with incorrect length', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterName(data.name.invalidShort);
      SignUpPage.getLastName().click();
      SignUpPage.getNameError().should('have.text', data.name.errorMessages.length);
      SignUpPage.getName().should('have.css', 'border-color', data.borderColors.error);

      SignUpPage.enterName(data.name.invalidLong);
      SignUpPage.getNameError().should('have.text', data.name.errorMessages.length);
      SignUpPage.getName().should('have.css', 'border-color', data.borderColors.error);
    });
  });
});

describe('Validate the "Last Name" field inputs on the "Sign Up" form', () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto"
      }
    });
    HomePage.signUp();
  });

  it('Verify that the "Last Name" field is mandatory', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.getLastName().click().blur();
      SignUpPage.getLastNameError().should('have.text', data.lastName.errorMessages.required);
      SignUpPage.getLastName().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Last Name" field accepts valid input', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterLastName(data.lastName.valid);
      SignUpPage.getName().click();
      SignUpPage.getLastName().should('have.css', 'border-color', data.borderColors.success);
    });
  });

  it('Verify that the "Last Name" field rejects invalid input (non-English symbols)', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterLastName(data.lastName.invalidNonEnglish);
      SignUpPage.getName().click();
      SignUpPage.getLastNameError().should('have.text', data.lastName.errorMessages.invalid);
      SignUpPage.getLastName().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Last Name" field rejects input with incorrect length', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterLastName(data.lastName.invalidShort);
      SignUpPage.getName().click();
      SignUpPage.getLastNameError().should('have.text', data.lastName.errorMessages.length);
      SignUpPage.getLastName().should('have.css', 'border-color', data.borderColors.error);

      SignUpPage.enterLastName(data.lastName.invalidLong);
      SignUpPage.getLastNameError().should('have.text', data.lastName.errorMessages.length);
      SignUpPage.getLastName().should('have.css', 'border-color', data.borderColors.error);
    });
  });
});

describe('Validate the "Email" field inputs on the "Sign Up" form', () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto"
      }
    });
    HomePage.signUp();
  });

  it('Verify that the "Email" field is mandatory', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.getEmail().click().blur();
      SignUpPage.getEmailError().should('have.text', data.email.errorMessages.required);
      SignUpPage.getEmail().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Email" field accepts valid input', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterEmail(data.email.valid);
      SignUpPage.getName().click();
      SignUpPage.getEmail().should('have.css', 'border-color', data.borderColors.success);
    });
  });

  it('Verify that the "Email" field rejects invalid input', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterEmail(data.email.invalid);
      SignUpPage.getName().click();
      SignUpPage.getEmailError().should('have.text', data.email.errorMessages.invalid);
      SignUpPage.getEmail().should('have.css', 'border-color', data.borderColors.error);
    });
  });
});

describe('Validate the "Password" field inputs on the "Sign Up" form', () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: {
        username: "guest",
        password: "welcome2qauto"
      }
    });
    HomePage.signUp();
  });

  it('Verify that the "Password" field is mandatory', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.getPassword().click().blur();
      SignUpPage.getPasswordError().should('have.text', data.password.errorMessages.required);
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Password" field accepts valid input', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterPassword(data.password.valid);
      SignUpPage.getName().click();
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.success);
    });
  });

  it('Verify that the "Password" field rejects invalid input - Length Validation (Minimum)', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterPassword(data.password.invalidShort);
      SignUpPage.getName().click();
      SignUpPage.getPasswordError().should('have.text', data.password.errorMessages.invalid);
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Password" field rejects invalid input - Length Validation (Maximum)', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterPassword(data.password.invalidLong);
      SignUpPage.getName().click();
      SignUpPage.getPasswordError().should('have.text', data.password.errorMessages.invalid);
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Password" field rejects invalid input - Missing Integer', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterPassword(data.password.missingInteger);
      SignUpPage.getName().click();
      SignUpPage.getPasswordError().should('have.text', data.password.errorMessages.invalid);
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Password" field rejects invalid input - Missing Capital Letter', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterPassword(data.password.missingCapital);
      SignUpPage.getName().click();
      SignUpPage.getPasswordError().should('have.text', data.password.errorMessages.invalid);
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.error);
    });
  });

  it('Verify that the "Password" field rejects invalid input - Missing Small Letter', () => {
    cy.fixture('signUpFormData').then((data) => {
      SignUpPage.enterPassword(data.password.missingSmall);
      SignUpPage.getName().click();
      SignUpPage.getPasswordError().should('have.text', data.password.errorMessages.invalid);
      SignUpPage.getPassword().should('have.css', 'border-color', data.borderColors.error);
    });
  });
});

describe('Validate the "Re-enter password" field inputs on the "Sign Up" form', () => {
    beforeEach(() => {
      cy.visit("https://qauto.forstudy.space/", {
        auth: {
          username: "guest",
          password: "welcome2qauto"
        }
      });
      HomePage.signUp();
    });
  
    it('Verify matching correct passwords', () => {
      cy.fixture('signUpFormData').then((data) => {
        SignUpPage.enterPassword(data.password.valid);
        SignUpPage.reEnterPassword(data.password.valid);
        SignUpPage.getName().click();
        SignUpPage.getReEnterPassword().should('have.css', 'border-color', data.borderColors.success);
      });
    });
  
    it('Verify not matching passwords', () => {
      cy.fixture('signUpFormData').then((data) => {
        SignUpPage.enterPassword(data.password.valid);
        SignUpPage.reEnterPassword(data.password.valid2);
        SignUpPage.getName().click();
        SignUpPage.getReEnterPasswordError().should('have.css', 'border-color', data.borderColors.error);
        SignUpPage.getReEnterPasswordError().should('have.text', data.password.errorMessages.notMatch);
      });
    });
  
    it('Verify error on empty field', () => {
      cy.fixture('signUpFormData').then((data) => {
        SignUpPage.enterPassword(data.password.valid);
        SignUpPage.getReEnterPassword().click();
        SignUpPage.getName().click();
        SignUpPage.getReEnterPasswordError().should('have.css', 'border-color', data.borderColors.error);
        SignUpPage.getReEnterPasswordError().should('have.text', data.password.errorMessages.reEnter);
      });
    });
  
  });
class LoginPage {

    getEmail(){
        return cy.get('#signinEmail');
    }

    getPassword(){
        return cy.get('#signinPassword');
    }

    getLoginButton(){
        return cy.contains('button', 'Login');
    }

    getSignInButton(){
        return cy.contains('button', 'Sign In');
    }

    clickSignIn(){
        cy.contains('button', 'Sign In').click();
    }

    login(email, password) {

        this.clickSignIn();
        this.getEmail().type(email);
        this.getPassword().type(password);
        this.getLoginButton().click();
      }

  }
  
  export default new LoginPage();
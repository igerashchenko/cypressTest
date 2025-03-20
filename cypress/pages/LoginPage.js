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

  }
  
  export default new LoginPage();
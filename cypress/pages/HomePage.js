class HomePage {

    getSignUpButton(){
        return cy.contains('button', 'Sign up');
    }

    signUp() {
      this.getSignUpButton().click();
    }
  }
  
  export default new HomePage();
class SignUpPage {

    getName(){
        return cy.get('#signupName');
    }

    getNameError(){
        return cy.get('#signupName + .invalid-feedback');
    }

    getLastName(){
        return cy.get('#signupLastName');
    }

    getLastNameError(){
        return cy.get('#signupLastName + .invalid-feedback');
    }

    getEmail(){
        return cy.get('#signupEmail');
    }

    getEmailError(){
        return cy.get('#signupEmail + .invalid-feedback');
    }

    getPassword(){
        return cy.get('#signupPassword');
    }

    getPasswordError(){
        return cy.get('#signupPassword + .invalid-feedback');
    }

    getReEnterPassword(){
        return cy.get('#signupRepeatPassword');
    }

    getReEnterPasswordError(){
        return cy.get('#signupRepeatPassword + .invalid-feedback');
    }

    getRegisterButton(){
        return cy.contains('button', 'Register');
    }
    
    getTitle(){
        return cy.get('.modal-title');
    }

    getCloseButton(){
        return cy.get('.close > span');
    }

    enterName(name){
        this.getName().type(name);
    }

    enterLastName(lastName){
        this.getLastName().type(lastName);
    }

    enterEmail(email){
        this.getEmail().type(email);
    }

    enterPassword(password){
        this.getPassword().type(password);
    }

    reEnterPassword(password){
        this.getReEnterPassword().type(password);
    }

    clickRegister(){
        this.getRegisterButton().click();
    }

  }
  
  export default new SignUpPage();
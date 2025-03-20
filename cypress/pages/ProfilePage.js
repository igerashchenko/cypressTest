class ProfilePage {

    getProfileButton(){
        return cy.get('#userNavDropdown');
    }

    getLogoutButton(){
        return cy.contains('button', 'Logout');
    }

    logout(){
        this.getProfileButton().click();
        this.getLogoutButton().click();
        cy.url().should('eq', 'https://qauto.forstudy.space/');
    }

  }
  
  export default new ProfilePage();
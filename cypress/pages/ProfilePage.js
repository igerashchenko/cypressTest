class ProfilePage {

    getProfileButton(){
        return cy.get('#userNavDropdown');
    }

  }
  
  export default new ProfilePage();
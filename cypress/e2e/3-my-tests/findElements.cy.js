describe('Check that the footer buttons are displayed on the page',()=>{
    beforeEach(()=>{
        cy.visit("https://qauto.forstudy.space/", {auth: {
            username: "guest",
            password: "welcome2qauto"
        }})
    })
    it('Check the social media buttons in the footer', () => {
        const facebookIcon = ".icon-facebook";
        const telegramIcon = ".icon-telegram";
        const youtubeIcon = ".icon-youtube";
        const instagranIcon = ".icon-instagram";
        const linkedinIcon = ".icon-linkedin";

        // usage cy.get() with classes
        // usage of the variables
        // usage of the aliases
        cy.get(facebookIcon).as("facebookIcon");
        cy.get(telegramIcon).as("telegramIcon");
        cy.get(youtubeIcon).as("youtubeIcon");
        cy.get(instagranIcon).as("instagranIcon");
        cy.get(linkedinIcon).as("linkedinIcon");
      })

      it('Check the contact links in the footer', ()=> {
        // cy.get('a.contacts_link').eq(0).as("siteLink");
        // cy.get('a.contacts_link').eq(1).as("emailLink");
        cy.get('a.contacts_link').first().as("siteLink");
        cy.get('a.contacts_link').last().as("emailLink");
      })
});
/// <reference types="cypress" />
// import HomePage from  "../pom/pages/HomePage";
// import SignInForm from "../pom/forms/SignInForm";

// describe("intercept", () => {
//  it("intercept query", () => {
//    cy.intercept('GET', '/api/cars').as('getCars');
//    HomePage.visit();
//    HomePage.openSignInForm();
//    SignInForm.LoginWithCredentials('dkolokhin+1@gmail.com','Cypress8067');
//    cy.get("h1").should('have.text', 'Garage');
//    cy.wait('@getCars').its('response.statusCode').should('eq', 200);

//   });
//     });
describe('Profile Page with Name Interception', () => {
    beforeEach(() => {
      
        cy.intercept('GET', '**/api/users/profile', {
            statusCode: 200,
            body: {
                status: "ok",
                data: {
                    userId: 1,
                    photoFilename: "default-user.png",
                    name: "Polar",
                    lastName: "Bear",
                    dateBirth: "2000-01-01",
                    country: "Ukraine"
                }
            }
        }).as('getProfile');


        cy.intercept('GET', '**/users/profile', {
            statusCode: 200,
            body: {
                status: "ok",
                data: {
                    userId: 1,
                    photoFilename: "default-user.png",
                    name: "Polar",
                    lastName: "Bear",
                    dateBirth: "2000-01-01",
                    country: "Ukraine"
                }
            }
        }).as('getProfileAlt');

           cy.visit('https://qauto.forstudy.space/', {
            auth: {
                username: 'guest',
                password: 'welcome2qauto',
            }
        });
    });

    it('should display intercepted name "Polar Bear" on Profile page', () => {
       
        cy.get('[data-cy="profile-link"]').click(); 
        
     
        cy.wait('@getProfile');

     
        cy.get('[data-cy="user-name"]').should('contain.text', 'Polar Bear');
        
        
        cy.get('.profile-name').should('contain.text', 'Polar');
        cy.get('.profile-name').should('contain.text', 'Bear');
        
        cy.get('[data-testid="first-name"]').should('have.text', 'Polar');
        cy.get('[data-testid="last-name"]').should('have.text', 'Bear');

       
        cy.get('body').should('not.contain', 'John'); 
        cy.get('body').should('not.contain', 'Smith'); 
    });

    it('should intercept multiple profile requests consistently', () => {
            cy.get('[data-cy="profile-link"]').click();
        cy.wait('@getProfile');
        
       
        cy.get('[data-cy="user-name"]').should('contain.text', 'Polar Bear');
        
        cy.get('[data-cy="dashboard-link"]').click();
        cy.get('[data-cy="profile-link"]').click();
        cy.wait('@getProfile');
        
        cy.get('[data-cy="user-name"]').should('contain.text', 'Polar Bear');
    });

    it('should verify that network request was intercepted', () => {
        cy.get('[data-cy="profile-link"]').click();
        
     
        cy.wait('@getProfile').then((interception) => {
            expect(interception.response.body.data.name).to.equal('Polar');
            expect(interception.response.body.data.lastName).to.equal('Bear');
        });
        
          cy.get('[data-cy="user-name"]').should('contain.text', 'Polar Bear');
    });
});
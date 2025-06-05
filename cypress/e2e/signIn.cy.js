/// <reference types="cypress" />
import HomePage from "../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";

describe("Sign In tests with POM", () => {
beforeEach(() => {
   HomePage.visit();
   HomePage.openSignInForm();
    });

    it("Successful sign in", () => {
    

     SignInForm.LoginWithCredentials('dkolokhin+1@gmail.com','Cypress8067');
     cy.get("h1").should('have.text', 'Garage');
  });

     it("Sign in without email", () => {
    SignInForm.triggerErrorMessageForField('email');
     SignInForm.enterPassword('23232455');
    //  SignInForm.loginButton.should('be.disabled');
     SignInForm.verifyLoginButtonDisabled();
     SignInForm.verifyErrorMassageForFieldIsVisible('email');
  });

    it("Sign in without password", () => {
 SignInForm.triggerErrorMessageForField('password');
     SignInForm.enterEmail('dkolokhin+1@gmail.com');
      SignInForm.verifyLoginButtonDisabled();
     SignInForm.verifyErrorMassageForFieldIsVisible('password');
  });

    it("Sign in with invalid email", () => {
      SignInForm.enterEmail('dkolok');
      SignInForm.enterPassword('Cypress8067');    
      SignInForm.verifyLoginButtonDisabled();
      SignInForm.verifyIncorrectEmailMessageIsVisible();
    
  });

  it("Sign in with incorrect credentials", () => {
     SignInForm.LoginWithCredentials('dkolokhin+1@gmail.com','Cypress8067');
     SignInForm.verifyWrongDataMessageIsVisible();
    
  });
});



describe.skip("Sign In tests without POM", () => {
beforeEach(() => {
    cy.visit("/");
cy.get(".header_signin").click();
    });

    it("Successful sign in", () => {
    cy.get("#signinEmail").type('dkolokhin+1@gmail.com');
     cy.get("#signinPassword").type('Cypress8067');
     cy.get('app-signin-modal .btn-primary').click();
     cy.get("h1").should('have.text', 'Garage');
  });

     it("Sign in without email", () => {
    cy.get("#signinEmail").focus().blur();
     cy.get("#signinPassword").type('Cypress8067');
     cy.get('app-signin-modal .btn-primary').should('be.disabled');
     cy.contains("Email required").should('be.visible');
  });

    it("Sign in without password", () => {
    cy.get("#signinEmail").type('dkolokhin+1@gmail.com');
     cy.get("#signinPassword").focus().blur();
     cy.get('app-signin-modal .btn-primary').should('be.disabled');
     cy.contains("Password required").should('be.visible');
  });

    it("Sign in with invalid email", () => {
    cy.get("#signinEmail").type('dkolokhin');
    cy.get("#signinPassword").type('Cypress8067');
    cy.get('app-signin-modal .btn-primary').should('be.disabled');
    cy.contains('Email is incorrect').should('be.visible');
  });

  it("Sign in with incorrect credentials", () => {
    cy.get("#signinEmail").type('dkolok1@gmail.com');
    cy.get("#signinPassword").type('ssCypress8067');
    cy.get('app-signin-modal .btn-primary').click();
    cy.contains('Wrong email or password').should('be.visible');
  });


  });

  
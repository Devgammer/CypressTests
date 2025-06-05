class SignInForm{

get emailField(){
 return cy.get("#signinEmail");

}

get passwordField(){
   return  cy.get("#signinPassword");
    
}

get loginButton(){
  return cy.get('app-signin-modal .btn-primary');
}

get wrongDataMassage(){
  return cy.contains('Wrong email or password');

}

get incorrectEmailMassage(){
    return cy.contains('Email is incorrect');
}

get emptyPasswordMassage(){
    return cy.contains('Password required');
}
get emptyEmailMassage(){
    return cy.contains('Email required');
}

enterEmail(email){
this.emailField.type(email);

}
enterPassword(password){
this.passwordField.type(password);

}
clickLoginButton(){
    this.loginButton.click();
}
LoginWithCredentials(email, password){
    this.enterEmail(email);
    this.enterPassword(password);
    this.clickLoginButton();
}

triggerErrorMessageForField(fieldName){
    const element = fieldName === 'email' ? this.emailField : this.passwordField;

    element.focus();
    element.blur();
}

verifyErrorMassageForFieldIsVisible(fieldName){
    
      const element = fieldName === 'email' ? this.emailField : this.passwordField;  
    element.should('be.visible');
}

verifyLoginButtonDisabled(){
this.loginButton.should('be.visible');
}

verifyIncorrectEmailMessageIsVisible(){
    this.incorrectEmailMassage.should('be.visible');
}

verifyWrongDataMessageIsVisible(){
    this.wrongDataMassage.should('be.visible');
}

    }

export default new SignInForm();
import GaragePage from "../pom/pages/GaragePage";
import HomePage from  "../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";



describe("adding new cars", () => {
beforeEach(() => {
    HomePage.visit();
    HomePage.openSignInForm();
    SignInForm.LoginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'),);
    GaragePage.pageHeader.should('be.visible');
  });

it.only("Add [audi] [A6] car", () => {
    GaragePage.addNewCar("Audi", "A6", '1000');
    GaragePage.verifyLastAddedCar('Audi A6');
  });


  it("Add [BMW] [X5] car", () => {
    GaragePage.addNewCar("BMW", "X5", '999');
    GaragePage.verifyLastAddedCar('BMW X5');  

  });
  it("Add [Ford] [Fiesta] car", () => {
GaragePage.addNewCar("Ford", "Fiesta", '999');
    GaragePage.verifyLastAddedCar('Ford Fiesta');
});
  it("Add [Porsche] [Panamera] car", () => {
  GaragePage.addNewCar("Porsche", "Panamera", '999');
    GaragePage.verifyLastAddedCar('Porsche Panamera');
    });

  it("Add [Fiat] [Panda] car", () => {
GaragePage.addNewCar("Fiat", "Panda", '999');
    GaragePage.verifyLastAddedCar('Fiat Panda');
  });

     

});


import GaragePage from "../pom/pages/GaragePage";
import HomePage from  "../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";
import ExpensesPage from "../pom/pages/ExpensesPage";

describe("adding new cars", () => {
beforeEach(() => {
    HomePage.visit();
    HomePage.openSignInForm();
    SignInForm.LoginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'),);
    GaragePage.pageHeader.should('be.visible');
  });

it("Add [audi] [A6] car", () => {
    GaragePage.addNewCar("Audi", "A6", '1000');
    GaragePage.verifyLastAddedCar('Audi A6');
  });

  
  });

  describe("add fuel expenses", () => {
  beforeEach(() => {
      HomePage.visit();
      HomePage.openSignInForm();
      SignInForm.LoginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'),);
      
    });
  
  context('add valid expense',() => {
     it("Add valid expense for [audi] [A6] car", () => {
      ExpensesPage.addFuelExpenses('1000', '1000', '1000');
      ExpensesPage.verifyLastAddedExpense('1000', '1000 L', '1000 USD');
    });
    });
  
  });
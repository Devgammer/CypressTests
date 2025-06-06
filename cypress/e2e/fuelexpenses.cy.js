import GaragePage from "../pom/pages/GaragePage";
import HomePage from  "../pom/pages/HomePage";
import SignInForm from "../pom/forms/SignInForm";
import ExpensesPage from "../pom/pages/ExpensesPage";

  describe('Add Fuel Expenses', () => {
    beforeEach(() => {
    HomePage.visit();
    HomePage.openSignInForm();
    SignInForm.LoginWithCredentials(Cypress.env('TEST_USER_EMAIL'), Cypress.env('TEST_USER_PASSWORD'),);

      
it.only("Add [audi] [A6] car", () => {
    GaragePage.addNewCar("Audi", "A6", '1000');
    GaragePage.verifyLastAddedCar('Audi A6'); 
    
  });      
  cy.get('body').then($body => {
        if ($body.find(GaragePage.carCard).length === 0) {
          GaragePage.addCar(testCar.model, testCar.mileage);
        }
      });
    });

    it('Add fuel expenses for exist car', () => {
          ExpensesPage.visit();
      ExpensesPage.verifyExpensesPageLoaded();

      
      let initialExpensesCount;
      ExpensesPage.getExpensesCount().then(count => {
        initialExpensesCount = count;
      });

      const vehicleName = `${testCar.brand} ${testCar.model}`;
      ExpensesPage.addFuelExpense(
        vehicleName,
        testExpense.date,
        testExpense.mileage,
        testExpense.liters,
        testExpense.cost
      );

      
      ExpensesPage.verifyExpenseExists(testExpense.cost);

      
      ExpensesPage.getExpensesCount().then(newCount => {
        expect(newCount).to.be.greaterThan(initialExpensesCount);
      });

     
      ExpensesPage.verifyModalClosed();
    });

  
  });
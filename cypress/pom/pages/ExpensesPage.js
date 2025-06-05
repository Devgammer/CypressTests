class ExpensesPage{

get pageHeader(){
     return cy.contains('h', 'Fuel expenses');
    
    }

get addFuelExpensesButton(){
     return cy.get('div.delimiter .btn-primary');
    }

    get litersField(){
      return  cy.get('#addExpenseLiters');    
           }

get expensesField(){
      return  cy.get('#addExpenseTotalCost');    
           }

           

get submitAddingFormButton(){
      return  cy.get('modal-footer d-flex justify-content-end .btn-primary');
      }



 visit(){
       cy.visit('/panel/expenses'); 
    }
    addFuelExpenses(totalCost, litres, mileage){
    this.addFuelExpensesButton.click();
    this.expensesField.select(totalCost);
    this.litersField.select(litres);
    this.mileageField.select(mileage); 
    this.submitAddingFormButton.click();
}


  


}
export default new ExpensesPage();

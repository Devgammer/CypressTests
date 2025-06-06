   class ExpensesPage {

  constructor() {
   
    this.addExpenseButton = 'button.btn-primary:contains("Add an expense")';
    this.addExpenseModal = '.modal-dialog';
    this.vehicleSelect = '#addExpenseCar';
    this.reportDateInput = '#addExpenseDate';
    this.mileageInput = '#addExpenseMileage';
    this.numberOfLitersInput = '#addExpenseNumberOfLiters';
    this.totalCostInput = '#addExpenseTotalCost';
    this.addButton = '.modal-footer button.btn-primary:contains("Add")';
    this.cancelButton = '.modal-footer button.btn-secondary:contains("Cancel")';
    this.expenseRow = 'tbody tr';
    this.expenseTable = '.table';
    this.removeExpenseButton = 'button.btn-outline-danger';
  }



  visit() {
    cy.visit('/panel/expenses');
    cy.wait(1000);
  }

  openAddExpenseModal() {
    cy.get(this.addExpenseButton).should('be.visible').click();
    cy.get(this.addExpenseModal).should('be.visible');
  }

  selectVehicle(vehicleName) {
    cy.get(this.vehicleSelect).select(vehicleName);
  }

  enterReportDate(date) {
    cy.get(this.reportDateInput).clear().type(date);
  }

  enterMileage(mileage) {
    cy.get(this.mileageInput).clear().type(mileage.toString());
  }

  enterNumberOfLiters(liters) {
    cy.get(this.numberOfLitersInput).clear().type(liters.toString());
  }

  enterTotalCost(cost) {
    cy.get(this.totalCostInput).clear().type(cost.toString());
  }

  clickAdd() {
    cy.get(this.addButton).click();
  }

  clickCancel() {
    cy.get(this.cancelButton).click();
  }


  addFuelExpense(vehicle, date, mileage, liters, cost) {
    this.openAddExpenseModal();
    this.selectVehicle(vehicle);
    this.enterReportDate(date);
    this.enterMileage(mileage);
    this.enterNumberOfLiters(liters);
    this.enterTotalCost(cost);
    this.clickAdd();
    cy.wait(1000);
  }
  

  verifyExpenseExists(cost) {
    cy.get(this.expenseRow).should('contain', cost.toString());
  }

  verifyExpensesPageLoaded() {
    cy.url().should('include', '/panel/expenses');
    cy.contains('Fuel expenses').should('be.visible');
  }

  verifyModalOpened() {
    cy.get(this.addExpenseModal).should('be.visible');
    cy.contains('Add an expense').should('be.visible');
  }

  verifyModalClosed() {
    cy.get(this.addExpenseModal).should('not.exist');
  }

  getExpensesCount() {
    return cy.get('tbody').then($tbody => {
      if ($tbody.find('tr').length === 1 && $tbody.text().includes('No expenses found')) {
        return 0;
      }
      return $tbody.find('tr').length;
    });
  }

  removeFirstExpense() {
    cy.get('tbody tr').first().within(() => {
      cy.get(this.removeExpenseButton).click();
    });

    cy.get('.modal-footer button.btn-danger').click();
    cy.wait(1000);
  }
}



export default new ExpensesPage();

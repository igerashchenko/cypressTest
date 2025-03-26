class ExpensesPage {
    
    addExpense(data){
        cy.get('#addExpenseCar').select(data.car);
        cy.get('#addExpenseDate').clear().type(data.date);
        cy.get('#addExpenseMileage').clear().type(data.mileage);
        cy.get('#addExpenseLiters').type(data.liters);
        cy.get('#addExpenseTotalCost').type(data.totalCost);
        cy.get('.modal-footer > .btn-primary').click();
    }

  }
  
  export default new ExpensesPage();
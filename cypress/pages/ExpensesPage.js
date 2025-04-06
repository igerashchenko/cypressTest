class ExpensesPage {

    getCar(){
        return cy.get('#carSelectDropdown');
    }

    getExpenceDate(){
        return cy.get('.expenses_table tbody tr td.font-weight-bold').first();
    }

    getExpenceMileage(){
        return cy.get('.expenses_table tbody tr td').eq(1);
    }

    getExpenceLiters(){
        return cy.get('.expenses_table tbody tr td').eq(2);
    }

    getExpenceTotalCost(){
        return cy.get('.expenses_table tbody tr td').eq(3);
    }

    selectCar(car){
        this.getCar().select(car);
    }
    
    addExpense(data){
        cy.get('#addExpenseCar').select(data.car);
        cy.get('#addExpenseDate').clear().type(data.date);
        cy.get('#addExpenseMileage').clear().type(data.mileage);
        cy.get('#addExpenseLiters').type(data.liters);
        cy.get('#addExpenseTotalCost').type(data.totalCost);
        cy.get('.modal-footer > .btn-primary').click();
    }

      checkExpenseData(data, formattedDate){
        cy.visit('/panel/expenses', {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
          });
        this.getExpenceDate().should('contain', formattedDate);
        this.getExpenceMileage().should('contain', data.mileage);
        this.getExpenceLiters().should('contain', data.liters);
        this.getExpenceTotalCost().should('contain', data.totalCost);
      };



  }
  
  export default new ExpensesPage();
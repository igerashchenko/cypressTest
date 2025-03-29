import GaragePage from '../pages/GaragePage';
import ExpensesPage from '../pages/ExpensesPage';
import LoginPage from '../pages/LoginPage';
import { after } from 'mocha';

describe('Car and Expenses Tests', () => {
    beforeEach(function() {
        const url = Cypress.config('baseUrl');
        const email = Cypress.config('users').email;
        const password = Cypress.config('users').password;

        cy.fixture('carAndExpenses').as('data');

        cy.visit(url, {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });

        LoginPage.login(email, password);
    });

    it('Add a car to garage', function() {
        GaragePage.addCar(this.data.carData);
        GaragePage.getGarageItem().should('exist');

    });

    it('Add expense for the car', function() {
        GaragePage.clickAddExpense();
        ExpensesPage.addExpense(this.data.expenseData);
    });

    after(() => {
        GaragePage.removeCar();
    })
});
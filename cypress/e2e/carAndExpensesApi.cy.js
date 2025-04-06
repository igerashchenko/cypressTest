import ExpensesPage from '../pages/ExpensesPage';
import GaragePage from '../pages/GaragePage';
import LoginPage from '../pages/LoginPage';
import { beforeEach } from 'mocha';

describe('Car and Expenses Tests', () => {
    beforeEach(function() {
        const url = Cypress.config('baseUrl');
        const email = Cypress.config('users').email;
        const password = Cypress.config('users').password;

        cy.fixture('carAndExpenses').as('data');
        cy.fixture('savedData').as('id');

        cy.visit(url, {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });

        LoginPage.login(email, password);
    });

        it('Add a car to garage', function() {
          GaragePage.addCarViaUI(this.data.carData);
          GaragePage.getGarageItem().should('exist');
    
        });

        it('Create expense via API', function(){
            const carIdData = this.id.createdCarId + 1;
            const todayData = new Date().toISOString().split('T')[0]; 
            const mileageData = parseInt(this.data.expenseData.mileage);
            const litersData = parseInt(this.data.expenseData.liters);
            const totalCostData = parseInt(this.data.expenseData.totalCost)
            const [year, month, day] = todayData.split('-');
            const formattedDate = `${day}.${month}.${year}`;


            const testBody = {
              carId: carIdData,
              reportedAt: todayData,
              mileage: mileageData,
              liters: litersData,
              totalCost: totalCostData,
              forceMileage: false
            };

           console.log('Request Body:', JSON.stringify(testBody, null, 2)); // Debug request payload

            cy.createExpense(testBody).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status', 'ok');
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.have.property('id');
            expect(response.body.data).to.have.property('carId', carIdData);
            expect(response.body.data).to.have.property('reportedAt');
            expect(response.body.data).to.have.property('mileage', mileageData);
            expect(response.body.data).to.have.property('liters', litersData);
            expect(response.body.data).to.have.property('totalCost', totalCostData);
              });
          ExpensesPage.checkExpenseData(testBody, formattedDate);
        })


        after(()=>{

            GaragePage.deleteAllCars();
        })

});
class GaragePage {
    constructor() {
        this.createdCarId = null; 
    }

    getCreatedCarId() {
        return this.createdCarId;
    }

    clickAddCarButton() {
        cy.contains('button', 'Add car').click();
        return this;
    }

    selectBrand(optionBrand) {
        cy.get('#addCarBrand').select(optionBrand);
        return this;
    }

    selectModel(optionModel) {
        cy.get('#addCarModel').select(optionModel);
        return this;
    }

    addMileage(value) {
        cy.get('#addCarMileage').type(value);
        return this;
    }

    clickAddButton() {
        cy.get('.modal-footer > .btn-primary').click();
        return this;
    }

    addCarViaUI(data) {
        cy.intercept('POST', '/api/cars').as('createCar');

        this.clickAddCarButton();
        this.selectBrand(data.brand);
        this.selectModel(data.model);
        this.addMileage(data.mileage);
        this.clickAddButton();

        cy.wait('@createCar').then((req) => {
            expect(req.response.statusCode).to.eq(201);
            this.createdCarId = req.response.body.data.id;
            
            cy.fixture('savedData').then((fixture) => {
                fixture.createdCarId = this.createdCarId;
                cy.log(`Car ID from fixture: ${this.createdCarId}`);
                cy.writeFile('cypress/fixtures/savedData.json', fixture);
            });
        });
        
        this.verifyCreatedCarViaApi(data);
      }

    getCarsViaApi() {
        return cy.request({
            method: 'GET',
            url: '/api/cars',
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
    }

    getGarageItem() {
        return cy.get('.car.jumbotron');
    }

    removeCar() {
        cy.visit('/panel/garage', {
            auth: {
                username: "guest",
                password: "welcome2qauto"
            }
        });
        cy.get(':nth-child(1) > app-car > .car > .car-heading > .car_actions > .car_edit > .icon').click();
        cy.contains('button', 'Remove car').click();
        cy.contains('button', 'Remove').click();

    }

    clickAddExpense(){
        cy.get('.car_add-expense').first().click();
    }


verifyCreatedCarViaApi(data){
  this.getCarsViaApi().then((response) => {
    const createdCar = response.body.data.find(car => car.id === this.createdCarId);
    expect(createdCar).to.exist;
    expect(createdCar).to.deep.include({
        brand: data.brand,
        model: data.model,
        mileage: parseInt(data.mileage)
    });
}
)}

async deleteAllCars() {
    const response = await this.getCarsViaApi();

    if (response.status !== 200 || !response.body.data?.length) return;

    for (const car of response.body.data) {
        await cy.request({
            method: 'DELETE',
            url: `/api/cars/${car.id}`,
            auth: {
                username: "guest",
                password: "welcome2qauto"
            },
            failOnStatusCode: false
        });
    }
}

}

export default new GaragePage();
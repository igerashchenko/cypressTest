class GaragePage {
    clickAddCarButton() {
        cy.contains('button', 'Add car').click();
    }

    selectBrand(optionBrand) {
        cy.get('#addCarBrand').select(optionBrand);
    }

    selectModel(optionModel) {
        cy.get('#addCarModel').select(optionModel);
    }

    addMileage(value) {
        cy.get('#addCarMileage').type(value);
    }

    clickAddButton() {
        cy.get('.modal-footer > .btn-primary').click();
    }

    addCar(data) {
        this.clickAddCarButton();
        this.selectBrand(data.brand);
        this.selectModel(data.model);
        this.addMileage(data.mileage);
        this.clickAddButton();
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

}

export default new GaragePage();
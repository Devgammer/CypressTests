/// <reference types="cypress" />



describe('Garage API Tests', () => {
    let authToken;
    let createdCarId;
    
    before(() => {
        cy.request({
            method: 'POST',
            url: '/api/auth/signin',
            body: {
                email: 'dkolokhin+1@gmail.com',
                password: 'Cypress8067',
                remember: false
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            authToken = response.body.data.token;
        });
    });

 


it('POST /api/cars - should create a new car', () => {
    cy.request({
        method: 'POST',
        url: '/api/cars',
        headers: {
            'Authorization': `Bearer ${authToken}`,
            'Content-Type': 'application/json'
        },
        body: {
            carBrandId: 1,
            carModelId: 1,
            mileage: 50000
        }
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.status).to.eq('ok');
        expect(response.body.data).to.have.property('id');
        createdCarId = response.body.data.id;
    });
});

 

it('GET /api/cars/brands - return list of car brands', () => {
        cy.request({
            method: 'GET',
            url: '/api/cars/brands',
            headers: {
                'Authorization': `Bearer ${authToken}`,
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).to.be.greaterThan(0);
            expect(response.body.data[0]).to.have.property('id');
            expect(response.body.data[0]).to.have.property('title');
        });
    });




it('GET /api/cars/models - return models for specific brand', () => {
        cy.request({
            method: 'GET',
            url: '/api/cars/models?brandId=1',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.be.an('array');
            if (response.body.data.length > 0) {
                expect(response.body.data[0]).to.have.property('id');
                expect(response.body.data[0]).to.have.property('title');
                expect(response.body.data[0]).to.have.property('carBrandId');
            }
        });
    });

 it('GET /api/cars -  return user cars', () => {
        cy.request({
            method: 'GET',
            url: 'https://qauto.forstudy.space/api/cars',
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).to.be.greaterThan(0);
            
            const createdCar = response.body.data.find(car => car.id === createdCarId);
            expect(createdCar).to.exist;
            expect(createdCar).to.have.property('carBrandId', 1);
            expect(createdCar).to.have.property('carModelId', 1);
            expect(createdCar).to.have.property('mileage', 50000);
        });
    });
  it('PUT /api/cars/:id - should update existing car', () => {
        cy.request({
            method: 'PUT',
            url: `/api/cars/${createdCarId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`,
                'Content-Type': 'application/json'
            },
            body: {
                carBrandId: 1,
                carModelId: 2,
                mileage: 55000
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.have.property('id', createdCarId);
            expect(response.body.data).to.have.property('carBrandId', 1);
            expect(response.body.data).to.have.property('carModelId', 2);
            expect(response.body.data).to.have.property('mileage', 55000);
            expect(response.body.data).to.have.property('updatedAt');
        });
    });

    it('DELETE /api/cars/:id - should delete car', () => {
        cy.request({
            method: 'DELETE',
            url: `https://qauto.forstudy.space/api/cars/${createdCarId}`,
            headers: {
                'Authorization': `Bearer ${authToken}`
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.have.property('carId', createdCarId);
        });
    });


    });
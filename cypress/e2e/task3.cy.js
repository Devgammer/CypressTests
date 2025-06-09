/// <reference types="cypress" />
import 'cypress-plugin-api'

describe('Garage API Tests', () => {
    let authToken;
   
    
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
        
        cy.api('GET', '/api/cars/brands').should((response) => {
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

           cy.api('GET', '/api/cars/models?brandId=1').should((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.status).to.eq('ok');
            expect(response.body.data).to.be.an('array');
            expect(response.body.data.length).to.be.greaterThan(0);
            expect(response.body.data[0]).to.have.property('id');
            expect(response.body.data[0]).to.have.property('title');
        });
    });

    

it("Code 200", () => {
    cy.request('GET', '/api/cars/brands').should((response) =>   {
        expect(response.status).to.eq(200);
        expect(response.body.status).to.have.length('2');
     expect(response.body.data).to.be.an('array');
      expect(response.body.data.length).to.be.greaterThan(0);
})
     cy.api('GET', '/api/cars/brands').should((response) =>   {
        expect(response.status).to.eq(200);
     expect(response.body.status).to.have.length('2');
      expect(response.body.data).to.be.an('array');
       expect(response.body.data.length).to.be.greaterThan(0);
})

  });

  


  
});

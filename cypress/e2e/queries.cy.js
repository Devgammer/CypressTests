/// <reference types="cypress" />

describe('search elements', () => {
  beforeEach(() => {

    cy.visit('/')
  })

    it('by CSS selector', () => {   
 cy.get('title');
    })
    it('by CSS selector', () => {   
 cy.get('button');
    })
  
    it('by find', () => {   
 cy.get('header').find('button'); 
 }) 
    it('by children', () => {   
 cy.get('header').find('button'); 
 cy.get('nav').find('button'); 
 }) 

    it('by text (contains)', () => {   
 cy.contains('With the help');
    })


})

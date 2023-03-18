/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Smith')
        cy.get('[name="email"]').type('test@gmail.com')
        cy.get('textarea.feedback-input').type('Lorem ipsom ... ')
        cy.get('[type="submit"]').click()
    })

    it.only("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Tom')
        cy.get('[name="last_name"]').type('Smith')
        cy.get('textarea.feedback-input').type('Lorem ipsom ... ')
        cy.get('[type="submit"]').click()
    })
})


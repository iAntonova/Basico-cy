import HomePage_PO from "../../../support/pageObject/webdriver-uni/Homepage_PO"
import ContactUs_PO from "../../../support/pageObject/webdriver-uni/Contact_Us_PO"

/// <reference types="Cypress"/>


/* https://docs.cypress.io/api/commands/fixture#Syntax */
describe("Test Contact Us form via WebdriverUni", () => {

    Cypress.config('defaultCommandTimeout', 20000)

    const homepage_PO = new HomePage_PO()
    const contact_Us_PO = new ContactUs_PO()

    before(function () {
        cy.fixture('example').then(function (data) {
            //this.data = data -- if this doesn't work use :
            globalThis.data = data
        })
    })

    beforeEach(() => {
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        // cy.visit("/" + "Contact-Us/contactus.html")
        //  cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html") ===>>>

        /* jQuery removeAttr() Method
         https://www.w3schools.com/jquery/html_removeattr.asp */

        // cy.get('#contact-us')
        //     .invoke('removeAttr', 'target')
        //     .click({ force: true })

        homepage_PO.visitHomePage()
        // cy.wait(3000)
        homepage_PO.clickOn_ContactUs_Button()
        //cy.pause()
    })

    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us').click({force: true})

        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('[name="email"]').type(data.email)
        // cy.get('textarea.feedback-input').type('Lorem ipsom ... ')

        // cy.get('[type="submit"]').click()

        // cy.get('h1').should('have.text', 'Thank You for your Message!')


        // cy.webdriveruni_ContactForm_Submission(data.first_name, data.last_name, data.email, 'Lorem ipsom ... ', 'h1', 'Thank You for your Message!')
        // Use GLOBAL variables
        /* cy.webdriveruni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'Lorem ipsom ... ', 'h1', 'Thank You for your Message!')
===>>> */
        contact_Us_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, 'Lorem ipsom ... ', 'h1', 'Thank You for your Message!')
    })

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
        // cy.get('[name="first_name"]').type(data.first_name)
        // cy.get('[name="last_name"]').type(data.last_name)
        // cy.get('textarea.feedback-input').type('Lorem ipsom ... ')
        // cy.get('[type="submit"]').click()
        // cy.get('body').contains('Error: all fields are required')
        /* cy.webdriveruni_ContactForm_Submission(data.first_name, data.last_name, " ",
            'Lorem ipsom ... ', 'body', 'Error: Invalid email address')  ===>>> */

        contact_Us_PO.contactForm_Submission(data.first_name, data.last_name, " ",
            'Lorem ipsom ... ', 'body', 'Error: Invalid email address')
    })
})


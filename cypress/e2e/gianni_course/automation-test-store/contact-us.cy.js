/// <reference types="Cypress"/>

describe("Test Contact Us form via Automation Test Store", () => {
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.visit('https://www.automationteststore.com/')
        // 
        cy.xpath("//a[contains(@href, 'contact')]").click()
        
        // cy.get('a[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.get('#ContactUsFrm_first_name').type("Joe")
        cy.get('#ContactUsFrm_email').type("joe_blogs112@gmail.com")
        cy.get('#ContactUsFrm_enquiry').type("Lorem ipsom ... ")
        cy.get('button[title="Submit"]').click()
    })
})


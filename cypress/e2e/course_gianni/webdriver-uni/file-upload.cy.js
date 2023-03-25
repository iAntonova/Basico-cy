/// <reference types="Cypress" />

/* https://docs.cypress.io/api/commands/selectfile#Syntax */

describe("Test File Upload via webdriveruni", () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
    })

    it("Upload a file ...", () => {
        cy.get('#myFile').selectFile("cypress/fixtures/Case1.png")
        cy.get('#submit-button')
    });

    it("Upload No file ...", () => {
        cy.get('#submit-button')

    });
});

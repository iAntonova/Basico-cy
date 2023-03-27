/// <reference types="Cypress"/>

describe("Add multiple items to basket", () => {
    before(() => {
        cy.fixture("products").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()
    })

    it("Add specific multiple items to basket", () => {
        globalThis.data.productName.forEach(function (element) {
            cy.addProductToBsaket(element)
        })
        cy.get('.dropdown-toggle > .fa').click()
    })
})

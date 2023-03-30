/* https://docs.cypress.io/api/commands/clearcookies#Syntax
https://docs.cypress.io/api/commands/clearlocalstorage#Syntax */

import AutoStore_HomePage_PO from "../../../support/pageObject/automation-test-store/AutoStore_Homepage_PO"
import AutoStore_HairCare_PO from "../../../support/pageObject/automation-test-store/AutoStore_HairCare_PO"

/// <reference types="Cypress"/>

const autoStore_Homepage_PO = new AutoStore_HomePage_PO()
const autoStore_HairCare_PO = new AutoStore_HairCare_PO()

describe("Add multiple items to basket", () => {
    before(() => {
        cy.fixture("products").then(function (data) {
            globalThis.data = data
        })
    })

    beforeEach(() => {
      /*   cy.visit('https://www.automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click() ===>>> */ 
        cy.clearLocalStorage()
        cy.clearCookies()
        autoStore_Homepage_PO.accessHomePage()
        autoStore_Homepage_PO.clickOn_HairCare_Link()
    })
    
    it("Add specific multiple items to basket", () => {
         globalThis.data.productName.forEach(function (element) {
            cy.addProductToBsaket(element)
        })
        cy.get('.dropdown-toggle > .fa').click() 
      //  autoStore_HairCare_PO.addHairCareProductsToBusket()
    })
})

/// <reference types="Cypress"/>

describe("Verify Autocomplete dropdown lists via webdriveruni", () => {

    it("Select specific product via autocomplete dropdown list", () => {
        cy.visit('http://www.webdriveruniversity.com')
        cy.get('#autocomplete-textfield')
            .invoke('removeAttr', 'target')
            .click({ force: true })
        cy.get('#myInput').type('A')


        cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
            const prod = $el.text()
            const productToSelect = 'Avocado'

            if (prod === productToSelect) {
                //$el.click()
                $el.trigger("click", { force:true })
                //$el.scrollIntoView().click({ force:true })

                cy.get('#submit-button').click()
                cy.url().should('include', 'Avocado')
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each(($el, index, $list) => {
                const prod = $el.text()
                const productToSelect = 'Grapes'
    
                if (prod === productToSelect) {
                    //$el.click()
    
                    cy.get('#submit-button').click()
                    cy.url().should('include', 'Avocado')
                }
            })
        })
    })
})


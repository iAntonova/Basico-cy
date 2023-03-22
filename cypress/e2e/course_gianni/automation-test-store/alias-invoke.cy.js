/// <reference types="Cypress"/>

describe("Alias and invoke", () => {

    it("Validate a specific hair care product", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('a[href*="product/category&path="]').contains('Hair Care').click()

        cy.get('.fixed_wrapper .prdocutname')
            .eq(0)
            .invoke('text')
            .as('productThumbnail')

        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it("Validate product thumbnail", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')

        cy.get('@productThumbnail')
            .should('have.length', 16)

        cy.get('@productThumbnail').find('.productcart')
            .invoke('attr', 'title')
            .should('include', 'Add to Cart')

    })

    it.only("Calculate total of narmal and sale products", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').as('productThumbnail')

        // cy.get('@productThumbnail')
        //     .find('.oneprice')
        //     .each(($el, index, $list) => {
        //         cy.log($el.text())
        //     })

        cy.get('@productThumbnail')
            .find('.oneprice')
            .invoke('text')
            .as('itemPrice')

        cy.get('@productThumbnail')
            .find('.pricenew')
            .invoke('text')
            .as('saleItemPrice')

        var itemsTotal = 0
        cy.get('@itemPrice')
            .then($linkText => {
                var itemPriceTotal = 0
                //create an array
                var itemPrice = $linkText.split('$')
                //iterate througth the array
                var i
                // for loop
                for (i = 0; i < itemPrice.length; i++) {
                    cy.log(itemPrice[i])
                    itemPriceTotal += Number(itemPrice[i])
                }
                itemsTotal += itemPriceTotal
                cy.log("Non sale price items total: " + itemPriceTotal)
            })

        cy.get('@saleItemPrice')
            .then($linkText => {
                var saleItemPrice = $linkText.split('$')
                var i
                for (i = 0; i < saleItemPrice.length; i++) {
                    cy.log(saleItemPrice[i])
                    //saleItemPriceTotal += Number(saleItemPrice[i])
                }
            })
    })
})

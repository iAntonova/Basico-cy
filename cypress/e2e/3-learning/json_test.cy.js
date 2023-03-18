/// <reference types = "cypress" />

const requiredExample = require('../../fixtures/tags')

/* Command for Auto Suggestions in Cypress */
describe('JSON Objects', () => {

    beforeEach(() => {
        // load example.json fixture file and store
        // in the test context object
        cy.fixture('tags.json').as('tags')
    })

    requiredExample.forEach(test => {
        it(test.tag, () => {
            cy.log(test.feature)
        })
    })

    it('checks all JSON Object', function () {
        // we are inside the "function () { ... }"
        // callback and can use test context object "this"
        // "this.example" was loaded in "beforeEach" function callback
        expect(this.tags, 'fixture in the test context')
            .to.deep.equal(requiredExample)

        // or use "cy.wrap" and "should('deep.equal', ...)" assertion
        cy.wrap(this.tags)
            .should('deep.equal', requiredExample)

        // cy.wrap(this.tags).then(r => {
        //     r.forEach((item) => {
        //         cy.log(item.tag)
        //     })
        // })

        // cy.wrap(this.tags).then(r => {
        //     r.forEach((item, index, array) => {
        //         cy.log(item.feature + ' index:' + index + ' array: ' + array)
        //     })
        // })

        cy.wrap(this.tags).each(($elem, index, $list) => {
            cy.log($elem.feature + ' index:' + index + ' array: ' + $list)
        })




        /* Printing the Value on Console */
        // console.log(requiredExample[0])
        // console.log(requiredExample[0].tag)
        // console.log(requiredExample[0].feature)
        // console.log(requiredExample[0].feature[1])
    })


})

class AutoStore_HairCare_PO {

 addHairCareProductsToBusket(){
    globalThis.data.productName.forEach(function (element) {
        cy.addProductToBsaket(element)
    })
    cy.get('.dropdown-toggle > .fa').click()
 }

}
export default AutoStore_HairCare_PO;
class AutoStore_HairCare_PO {

 addHairCareProductsToBusket(){
    globalThis.data.productName.forEach(function (element) {
        cy.addProductToBsaket(element).then(()=>{
           // debugger
        })
    })
    cy.get('.dropdown-toggle > .fa').click().debug()
 }

}
export default AutoStore_HairCare_PO;
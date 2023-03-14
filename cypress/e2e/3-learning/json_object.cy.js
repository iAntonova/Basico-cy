/// <reference types = "cypress" />

/* Command for Auto Suggestions in Cypress */
describe('JSON Objects', () => {
    it('JSON Objects', () => {
        /* Simple Object with Key and Value  */
        const simpleObject = { "key": "value", "key2": "value2" }

        /* Simple Array with Index Value */
        const simpleArrayOfValues = ["one", "two", "three"]

        /* Array of Objects for the Array within an Object */
        const arrayOfObjects = [{ "key": "value" }, { "key2": "value2" }, { "key3": "value3" }]

        /* Types Data with an Immediate Value */
        const typesofData = { "String": "this is a string", "number": 100 }

        /* Mix of all Types */
        const mix =
        {
            "FirstName": "Hitesh",
            "LastName": "Mahi",
            "Age": 24,
            "Students": [{
                   "firstName": "Tony",
                   "LastName": "conor"
                },
                {
                    "firstname": "Andrew",
                    "Lastname": "Knight"
                }]
        }

        /* Printing the Value on Console */
        console.log(simpleObject.key)
        console.log(simpleObject["key2"])
        console.log(simpleArrayOfValues[2])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[0].firstName)
    })
})

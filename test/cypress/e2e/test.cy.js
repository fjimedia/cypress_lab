describe("первый коммит",()=>{
    it ("dsafa",()=>{
    cy.visit('http://localhost:3000') 
cy.get('h1').contains('Добропожаловать')
})
})
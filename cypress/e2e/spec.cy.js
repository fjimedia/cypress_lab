describe('template spec', () => {
  it('passes', () => {
    cy.visit('/test/index.html')
    cy.get('#username').type('fji')
    cy.get('#email').type('fji@gmail.com')
    cy.get('#password').type('123456')
    cy.get('.btn').click()
  })
})
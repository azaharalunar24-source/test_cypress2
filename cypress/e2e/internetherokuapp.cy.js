describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://the-internet.herokuapp.com/')
  })
})
  it('clicar en form', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21)>a').click()
   })
 it('login', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21)>a').click()
    cy.get('[name="username"]').type("tomsmith")
    cy.get('[name="password"]').type("SuperSecretPassword!")
    cy.get('#login button.radius').click()
})   
    
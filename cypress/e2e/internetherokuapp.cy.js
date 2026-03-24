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
    cy.get('.subheader')
    cy.get('#flash')  
})
 it('ir a la pagina', () => {
    cy.visit('https://the-internet.herokuapp.com/')  
}) 
it('clicar en shifting content', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39)>a').click()
})     
it('Clicar en Example 1', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39)>a').click()
    cy.get('[href="/shifting_content/menu"]').click()
}) 
it('Comprobar que la tabla tiene 5 elementos', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(39)>a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('.example ul li').should('have.length', 5)
}) 

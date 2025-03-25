describe('TodoMVC Tests', () => {
    beforeEach(() => {
      cy.visit('https://demo.playwright.dev/todomvc/#/') // Updated URL
    })
  
    it('Adds a todo', () => {
      cy.get('.new-todo')
        .should('be.visible') // Explicit assertion
        .type('Learn Cypress{enter}')
      cy.get('.todo-list li').should('have.length', 1)
    })
  })
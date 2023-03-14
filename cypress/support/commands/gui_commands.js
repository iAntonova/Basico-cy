
Cypress.Commands.add('gui_login', (
    username = Cypress.env('user_name'),
    password = Cypress.env('user_password')
  ) => {
    cy.visit('users/sign_in')
  
    cy.get('[data-qa-selector="login_field"]').type(username)
    cy.get('[data-qa-selector="password_field"]').type(password, { log: false })
    cy.get('[data-qa-selector="sign_in_button"]').click()
  
    cy.get('.qa-user-avatar').should('exist')
  })
  
  Cypress.Commands.add('gui_login_or_signup_and_login', (
    username = Cypress.env('user_name'),
    password = Cypress.env('user_password')
  ) => {
    cy.visit('')
  
    cy.url().then(url => {
      if (url.includes('/users/password/edit?reset_password_token=')) {
        cy.signup(password)
      }
    })
  
    cy.gui_login(username, password)
  })
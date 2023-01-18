/* eslint-disable @typescript-eslint/method-signature-style */
/* eslint-disable @typescript-eslint/no-namespace */
/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child   --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

export const STRONG_PASSWORD = 'wB9mdaPqyKj@i.wf.oFTJw!wxkvKvZLwHw9R@GtgpWhGX'

Cypress.Commands.add('fillSignUpForm', () => {
  cy.visit('http://localhost:3000')
  cy.get('button[data-testid="subscribe-button"]').click()
  cy.get('input[data-testid="email-input"]').type('valid@email.com')
  cy.get('input[data-testid="password-input"]').type(STRONG_PASSWORD)
  cy.get('input[data-testid="password-confirmation-input"]').type(
    STRONG_PASSWORD
  )
  cy.get('input[data-testid="name-input"]').type('John Doe')
  cy.get('input[data-testid="company-name-input"]').type(
    'Vain, the best company ever'
  )
  cy.get('input[data-testid="phone-number-input"]')
    .focus()
    .clear()
    .type('12345678912')
  cy.get('button[data-testid="sign-up-button"]').click()
})

Cypress.Commands.add('fillSMSCodeForm', () => {
  cy.visit(
    'http://localhost:3000/company-email-verified?needs_sms_verification=true&price_id=price_id&employee_id=employee_id'
  )
  cy.get('input[data-testid="sms-code-input"]').type('1234')
  cy.get('button[data-testid="verify-phone-number-button"]').click()
})

declare global {
  namespace Cypress {
    interface Chainable {
      fillSignUpForm(): Chainable<void>
      fillSMSCodeForm(): Chainable<void>
      // login(email: string, password: string): Chainable<void>
      // drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
      // dismiss(
      //   subject: string,
      //   options?: Partial<TypeOptions>
      // ): Chainable<Element>
      // visit(
      //   originalFn: CommandOriginalFn,
      //   url: string,
      //   options: Partial<VisitOptions>
      // ): Chainable<Element>
    }
  }
}

export {}

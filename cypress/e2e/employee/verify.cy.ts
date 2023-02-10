context('Employee verify flow', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/api/verify-phone-number', {
      fixture: 'verify-phone-number.json',
    })
    cy.intercept('POST', '**/api/resend-sms', {
      fixture: 'resend-sms.json',
    })
  })

  it('should redirect to /employee/phone-number-verified if the needs_sms_verification query param is false', () => {
    cy.visit(
      'http://localhost:3000/employee/email-verified?needs_sms_verification=false&employee_id=employee_id'
    )
    cy.location('pathname').should('eq', '/employee/phone-number-verified')
    cy.contains(
      'Está tudo pronto com a sua conta! Agora é só entrar e começar a usar o sistema.'
    )
  })

  it('should render input errors after submitting the form with invalid data', () => {
    cy.visit(
      'http://localhost:3000/employee/email-verified?needs_sms_verification=true&employee_id=employee_id'
    )

    cy.get('button[data-testid="verify-phone-number-button"]').click()
    cy.contains('O código tem que ter 4 dígitos.')

    cy.get('input[data-testid="sms-code-input"]').type('123')
    cy.get('button[data-testid="verify-phone-number-button"]').click()
    cy.contains('O código tem que ter 4 dígitos.')

    cy.get('input[data-testid="sms-code-input"]').focus().clear().type('12345')
    cy.get('button[data-testid="verify-phone-number-button"]').click()
    cy.contains('O código tem que ter 4 dígitos.')

    cy.get('input[data-testid="sms-code-input"]').focus().clear().type('1234')
    cy.get('button[data-testid="verify-phone-number-button"]').click()
    cy.contains('O código tem que ter 4 dígitos.').should('not.exist')
  })

  it('should render a success toast after asking for resend sms code', () => {
    cy.visit(
      'http://localhost:3000/employee/email-verified?needs_sms_verification=true&employee_id=employee_id'
    )
    cy.get('button[data-testid="resend-sms-code-button"]').click()
    cy.contains('Código reenviado')
  })

  it('should redirect to /employee/phone-number-verified after submitting the form with valid data', () => {
    cy.fillSMSCodeFormEmployee()
    cy.location('pathname').should('eq', '/employee/phone-number-verified')
    cy.contains(
      'Está tudo pronto com a sua conta! Agora é só entrar e começar a usar o sistema.'
    )
  })
})

export {}

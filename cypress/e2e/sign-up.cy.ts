import { STRONG_PASSWORD } from '../support/commands'

context('Sign up flow', () => {
  beforeEach(() => {
    cy.intercept('POST', '**/api/pre-sign-up', {
      fixture: 'pre-sign-up.json',
    })
    cy.intercept('POST', '**/api/sign-up', {
      fixture: 'sign-up.json',
    })
    cy.intercept('POST', '**/api/resend-email', {
      fixture: 'resend-email.json',
    })
    cy.intercept('POST', '**/api/create-checkout-session', {
      fixture: 'create-checkout-session.json',
    })
    cy.intercept('POST', '**/api/verify-phone-number', {
      fixture: 'verify-phone-number.json',
    })
    cy.intercept('POST', '**/api/resend-sms', {
      fixture: 'resend-sms.json',
    })
  })

  it('should switch the price interval between monthly and yearly', () => {
    cy.visit('http://localhost:3000')
    cy.get('button[data-testid="monthly-pricing-interval"]').click()
    cy.contains('/mês')

    cy.get('button[data-testid="yearly-pricing-interval"]').click()
    cy.contains('/ano')
  })

  it('should redirect to /sign-up providing price_id as query params', () => {
    cy.visit('http://localhost:3000')
    cy.get('button[data-testid="subscribe-button"]').click()
    cy.location('pathname').should('eq', '/sign-up')
    cy.contains('Criar uma conta')
  })

  it('should render all the errors when the form is submitted with invalid data', () => {
    cy.visit('http://localhost:3000')
    cy.get('button[data-testid="subscribe-button"]').click()
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um endereço de e-mail válido.')
    cy.contains('A senha deve ter no mínimo 6 caracteres.')
    cy.contains('Informe seu nome.')
    cy.contains('Informe o nome da empresa.')
    cy.contains('Apenas números são permitidos.')

    cy.get('input[data-testid="email-input"]').type('invalid-email')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um endereço de e-mail válido.')
    cy.get('input[data-testid="email-input"]')
      .focus()
      .clear()
      .type('valid@email.com')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um endereço de e-mail válido.').should('not.exist')

    cy.get('input[data-testid="password-input"]').type('12345')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('A senha deve ter no mínimo 6 caracteres.')
    cy.get('input[data-testid="password-input"]')
      .focus()
      .clear()
      .type('1234567')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('A senha deve ser mais forte.')
    cy.get('input[data-testid="password-input"]')
      .focus()
      .clear()
      .type(STRONG_PASSWORD)
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('A senha deve ser mais forte.').should('not.exist')
    cy.contains('A senha deve ter no mínimo 6 caracteres.').should('not.exist')

    cy.get('input[data-testid="password-confirmation-input"]').type('12345')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('A confirmação de senha não corresponde à senha informada.')
    cy.get('input[data-testid="password-confirmation-input"]')
      .focus()
      .clear()
      .type(STRONG_PASSWORD)
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains(
      'A confirmação de senha não corresponde à senha informada.'
    ).should('not.exist')

    cy.get('input[data-testid="name-input"]').type('John Doe')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe seu nome.').should('not.exist')

    cy.get('input[data-testid="company-name-input"]').type(
      'Vain, the best company ever'
    )
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe o nome da empresa.').should('not.exist')

    cy.get('input[data-testid="phone-number-input"]').type('123')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um número de telefone válido.')
    cy.get('input[data-testid="phone-number-input"]')
      .focus()
      .clear()
      .type('invalid-phone-number')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Apenas números são permitidos.')
    cy.get('input[data-testid="phone-number-input"]')
      .focus()
      .clear()
      .type('123456789')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um número de telefone válido.')
    cy.get('input[data-testid="phone-number-input"]')
      .focus()
      .clear()
      .type('123456789123')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um número de telefone válido.')
    cy.get('input[data-testid="phone-number-input"]')
      .focus()
      .clear()
      .type('12345678912')
    cy.get('button[data-testid="sign-up-button"]').click()
    cy.contains('Informe um número de telefone válido.').should('not.exist')
    cy.contains('Apenas números são permitidos.').should('not.exist')
  })

  it('should redirect to /verify-your-email after submitting the sign up form', () => {
    cy.fillSignUpForm()
    cy.location('pathname').should('eq', '/verify-your-email')
    cy.contains(
      'Te enviamos um e-mail de confirmação para finalizar o seu cadastro.'
    )
  })

  it('should redirect to /verify-your-email if the API returns that the user needs to verify their email address', () => {
    cy.intercept('POST', '**/api/pre-sign-up', {
      fixture: 'pre-sign-up-need-email-verification.json',
    })

    cy.fillSignUpForm()
    cy.location('pathname').should('eq', '/verify-your-email')
  })

  it('should render a success toast after asking for resend email', () => {
    cy.fillSignUpForm()
    cy.get('button[data-testid="resend-email-verification-button"]').click()
    cy.contains('E-mail reenviado')
  })

  it('should redirect to /company-phone-number-verified if the needs_sms_verification query param is false', () => {
    cy.visit(
      'http://localhost:3000/company-email-verified?needs_sms_verification=false&price_id=price_id&employee_id=employee_id'
    )
    cy.location('pathname').should('eq', '/company-phone-number-verified')
    cy.contains(
      'Está tudo pronto com a sua conta! Agora, para liberar o seu acesso, você precisa cadastrar um método de pagamento para ativar a sua assinatura.'
    )
  })

  it('should render input errors after submitting the form with invalid data', () => {
    cy.visit(
      'http://localhost:3000/company-email-verified?needs_sms_verification=true&price_id=price_id&employee_id=employee_id'
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
      'http://localhost:3000/company-email-verified?needs_sms_verification=true&price_id=price_id&employee_id=employee_id'
    )
    cy.get('button[data-testid="resend-sms-code-button"]').click()
    cy.contains('Código reenviado')
  })

  it('should redirect to /company-phone-number-verified after submitting the form with valid data', () => {
    cy.fillSMSCodeForm()
    cy.location('pathname').should('eq', '/company-phone-number-verified')
    cy.contains(
      'Está tudo pronto com a sua conta! Agora, para liberar o seu acesso, você precisa cadastrar um método de pagamento para ativar a sua assinatura.'
    )
  })

  it('should render the /payment-succeeded page correctly', () => {
    cy.visit('http://localhost:3000/payment-succeeded')
    cy.contains('Pagamento confirmado!')
    cy.contains('Tudo pronto!')
    cy.contains(
      'Já está tudo pronto para você começar. A partir de agora, você pode acessar a plataforma e começar a utilizar todas as funcionalidades.'
    )
  })
})

export {}

describe('Login page', function() {
    it('login page should render', function() {
        cy.visit('/login/email')
        cy.get('#login-email')
            .should('be.visible')
    })
    it('uses the login fields', function() {
        cy.get('#login-email').type('bbascom@kollective.com')
        cy.get('#login-password').type('whatisit!1')
            .should('have.value', 'whatisit!1')
        cy.get('label > input').click()
        cy.get('#login-submit').click()
    })
    it('redirects to dashboard after login', function() {
        cy.visit('/dashboards/analytics_external::live_event_summary?')
        cy.url().should('include', 'login')
    })
})
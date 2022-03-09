

describe('home page', () => {
    it('app deve estar online', () => {
        //configurar a resolução cy.viewport(1440,900),
        cy.visit('https://buger-eats.vercel.app/?_gl=1*l0wwrn*_ga*ODI2MjY0MjczLjE2NDU0NjQxNjg.*_ga_37GXT4VGQK*MTY0NTU0ODMzOS4zLjEuMTY0NTU1MjAzNi4w'),
            cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})
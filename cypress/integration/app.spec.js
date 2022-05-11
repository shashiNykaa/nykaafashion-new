describe('Navigation', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/abc/c/6842?root')
  
      // Find a link with an href attribute containing "about" and click it
      cy.get('div[href*="/p"]').first().click()
  
      // The new url should include "/about"
      cy.url().should('include', '/c')
  
      // The new page should contain an h1 with "About page"
      cy.get('h1').contains('ProductListingDesktop')
    })
  })
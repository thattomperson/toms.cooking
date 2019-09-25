describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	// it('has the correct <h1>', () => {
	// 	cy.contains('h1', 'Great success!')
	// });

	// it('navigates to /about', () => {
	// 	cy.get('nav a').contains('about').click();
  //   cy.url().should('include', '/about');
	// });

	// it('navigates to /blog', () => {
	// 	cy.get('nav a').contains('blog').click();
	// 	cy.url().should('include', '/blog');
  // });
  
  it('navigates to /styleguide', () => {

    cy.visit('/styleguide') 
      .then(() => {
        cy.get('[data-qa]').each(($el) => { 
          cy.wrap($el).toMatchImageSnapshot({
            name: $el.data('qa'),
            threshold: 0.001,
          })
        })
      })
  })
});
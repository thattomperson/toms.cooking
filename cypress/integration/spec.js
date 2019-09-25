describe('Sapper template app', () => {
	beforeEach(() => {
		cy.visit('/')
	});

	it('has the correct <h1>', () => {
		cy.contains('h1', 'Great success!')
	});

	it('navigates to /about', () => {
		cy.get('nav a').contains('about').click();
    cy.url().should('include', '/about');
	});

	it('navigates to /blog', () => {
		cy.get('nav a').contains('blog').click();
		cy.url().should('include', '/blog');
  });
  
  it('navigates to /styleguide', () => {
    cy.get('nav a').contains('styleguide').click();
    cy.url().should('include', '/styleguide');


    cy.get('.qa').each(($el) => {
      cy.wrap($el).toMatchImageSnapshot({
        threshold: 0.001,
      })
    })
  })
});
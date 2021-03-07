/**
 Assertions - https://docs.cypress.io/guides/references/assertions.html#Common-Assertions
 Cypress - https://docs.cypress.io/api/api/table-of-contents.html
 Chai - https://www.chaijs.com/api/bdd/

 Cypress - es-linter `npm install --save-dev eslint-plugin-cypress`
 before - once before all.
 beforeEach - runs before every block.
 afterEach - runs after every block.
 after - runs once after all.
 */

describe("Make sure site loads", () => {
  beforeEach(() => {
    // cy.intercept("/graphql", {
    //   fixture: "workouts",
    // });

    cy.visit("http://localhost:3000");
    // cy.login();
  });

  it("Has two home links", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('.reset > button').click();
    cy.get(':nth-child(3) > :nth-child(3)').click();
    cy.get('.rbc-toolbar > :nth-child(3) > :nth-child(2)').click();
    cy.get('.rbc-toolbar > :nth-child(3) > :nth-child(1)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(3)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(1)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(3)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(3)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').click();
    cy.get('.rbc-toolbar > :nth-child(1) > :nth-child(2)').click();
    /* ==== End Cypress Studio ==== */
  });
});

// describe("Login", () => {
//   beforeEach(() => {
//     cy.visit("http://localhost:3000");
//   });
// });

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
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  var weekday = new Array(7);
  weekday[0] = "Sunday";
  weekday[1] = "Monday";
  weekday[2] = "Tuesday";
  weekday[3] = "Wednesday";
  weekday[4] = "Thursday";
  weekday[5] = "Friday";
  weekday[6] = "Saturday";

  var d = new Date();
  var nextMonth = d.getMonth() + 1;
  var lastMonth = d.getMonth() - 1;
  beforeEach(() => {
    // cy.intercept("/graphql", {
    //   fixture: "workouts",
    // });

    cy.visit("http://localhost:3000");
    // cy.login();
  });

  it("Has Nav Links", () => {
    /* ==== Generated with Cypress Studio ==== */
    // Assert heading exists

    // assert reset button is clickable
    cy.get(".reset > button").click();
    cy.contains("Localist-Viewer");

    // Click List View
    cy.get(":nth-child(3) > :nth-child(3)").click();
    // Assert List View Exists
    cy.get(".rbc-agenda-view");

    // Click Mon View
    cy.get(".rbc-toolbar > :nth-child(3) > :nth-child(1)").click();
    // Assert Calendar Month View Exists
    cy.get(".rbc-calendar");
    cy.get(".rbc-toolbar-label").contains(months[d.getMonth()]);

    // Assert Calendar Next Month
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(3)").click();
    cy.get(".rbc-toolbar-label").contains(months[nextMonth]);

    // Assert Calendar This Month
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(2)").click();
    cy.get(".rbc-toolbar-label").contains(months[d.getMonth()]);

    // Assert Calendar Last Month
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(2)").click();
    cy.get(".rbc-toolbar-label").contains(months[lastMonth]);

    // Day View
    cy.get(".rbc-toolbar > :nth-child(3) > :nth-child(2)").click();
    cy.get(".rbc-time-view");

    // Today
    cy.get(".rbc-toolbar > :nth-child(1) > :nth-child(1)").click();
    cy.get(".rbc-toolbar-label").contains(weekday[d.getDay()]);
    /* ==== End Cypress Studio ==== */
  });
});

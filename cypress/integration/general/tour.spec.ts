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

const moment = require("moment");
const initEvents = require("../../fixtures/testData.json");

// --------------------------- SET UP ----------------------------------------/

// functions from "../../../src/lib/js/components/molecules/EventsCalendar/dateUtils";
export function weekOfMonth(m) {
  var first = m.clone().startOf("month").week(); // mutates original value
  const firstDay = moment(m).week(first).day(0);
  return firstDay;
}
const start = weekOfMonth(moment().startOf("month"));

const eventsData = initEvents.events.map((event, i) => {
  const instances = event.event.event_instances.map((instance) => {
    return {
      event_instance: {
        ...instance.event_instance,
        start: start.clone().add(i, "day").format(),
        end: start.clone().add(i, "day").format(),
      },
    };
  });
  return {
    event: {
      ...event.event,
      event_instances: instances,
      first_date: moment().add(i, "day").format("YYYY-MM-DD"),
      last_date: moment().add(i, "day").format("YYYY-MM-DD"),
    },
  };
});

// sets the 4 events to the beginning odf the month.
const events = { ...initEvents, events: eventsData };

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
var weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// --------------------------- END OF SET UP ----------------------------------/

describe("Make sure site loads", () => {
  var d = new Date();
  var nextMonth = d.getMonth() + 1;
  var lastMonth = d.getMonth() - 1;
  beforeEach(() => {
    cy.intercept("https://events.cornell.edu/api/2.1/events", (req) => {
      // req.reply() with a callback will send the request to the destination server
      req.reply((res) => {
        // 'res' represents the real destination response
        // you can manipulate 'res' before it's sent to the browser
        res.send(events);
      });
    });

    cy.visit(Cypress.env("APP_URL"));
  });

  it("Has Nav Links and date change", () => {
    // Assert heading exists

    // assert reset button is clickable

    cy.contains("Localist-Viewer");
    cy.get(".toolbar").contains(months[d.getMonth()]);

    // Assert Calendar Next Month
    cy.get(".links > :nth-child(1)").click();
    cy.get(".toolbar").contains(months[lastMonth]);

    // Assert Calendar This Month
    cy.get(":nth-child(3) > .prev").click();
    cy.get(".toolbar").contains(months[d.getMonth()]);

    // Assert Calendar Last Month
    cy.get(":nth-child(3) > .prev").click();
    cy.get(".toolbar").contains(months[nextMonth]);

    cy.get(":nth-child(3) > .prev").click();

    // cy.get(".toolbar").contains(weekday[d.getDay()]);
    /* ==== Generated with Cypress Studio ==== */

    cy.get(":nth-child(3) > .prev").click();

    cy.get(".links > :nth-child(2)").click();
    /* ==== End Cypress Studio ==== */
  });

  it("events month exist", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".active").click();
    cy.get(".links > :nth-child(1)").click();
    cy.get(
      ":nth-child(1) > .content > :nth-child(2) > .event > .button-text"
    ).click();
    cy.get(".close > svg").click();
    cy.get(
      ":nth-child(2) > .content > :nth-child(2) > .event > .button-text"
    ).click();
    cy.get(".close > svg").click();
    cy.get(":nth-child(3) > .content > :nth-child(2) > .event").click();
    cy.get(".close > svg").click();
    cy.get(":nth-child(4) > .content > :nth-child(2) > .event").click();
    cy.get(".close > svg").click();
    /* ==== End Cypress Studio ==== */
  });

  it("events list exist", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".view > :nth-child(3)").click();
    cy.get(".links > :nth-child(1)").click();
    cy.get(
      ":nth-child(1) > :nth-child(1) > .events > .group-link-wrapper > .title > h3"
    ).click();
    cy.get(".close > svg").click();
    cy.get(
      ":nth-child(2) > :nth-child(1) > .events > .group-link-wrapper > .meta > p"
    ).click();
    cy.get("svg > path").click();
    cy.get(
      ":nth-child(3) > :nth-child(1) > .events > .group-link-wrapper > .field-name-summary > p"
    ).click();
    cy.get("svg > path").click();
    cy.get(
      ":nth-child(4) > :nth-child(1) > .events > .group-link-wrapper > .field-name-summary > p"
    ).click();
    cy.get(".close > svg").click();
    /* ==== End Cypress Studio ==== */
  });

  it("back month test", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.get(".links > :nth-child(1)").click();
    cy.get(":nth-child(2) > ul > li > label > input").check();
    cy.get(":nth-child(2) > ul > li > label > input").uncheck();
    cy.get(":nth-child(5) > ul > :nth-child(1) > label > input").check();
    cy.get(":nth-child(5) > ul > :nth-child(1) > label > input").uncheck();
    cy.get(":nth-child(5) > ul > :nth-child(2) > label > input").check();
    cy.get(":nth-child(5) > ul > :nth-child(2) > label > input").uncheck();
    cy.get(":nth-child(5) > ul > :nth-child(3) > label > input").check();
    cy.get(":nth-child(5) > ul > :nth-child(3) > label > input").uncheck();
    cy.get(":nth-child(5) > ul > :nth-child(4) > label > input").check();
    cy.get(":nth-child(5) > ul > :nth-child(4) > label > input").uncheck();
    cy.get(":nth-child(8) > ul > :nth-child(1) > label > input").check();
    cy.get(":nth-child(8) > ul > :nth-child(2) > label > input").check();
    cy.get(":nth-child(8) > ul > :nth-child(3) > label > input").check();
    cy.get(":nth-child(8) > ul > :nth-child(4) > label > input").check();
    cy.get(":nth-child(5) > label > input").check();
    cy.get(":nth-child(6) > label > input").check();
    cy.get(":nth-child(7) > label > input").check();
    cy.get(":nth-child(8) > label > input").check();
    cy.get(":nth-child(9) > label > input").check();
    cy.get(":nth-child(10) > label > input").check();
    cy.get(":nth-child(11) > label > input").check();
    cy.get(":nth-child(12) > label > input").check();
    cy.get(":nth-child(13) > label > input").check();
    cy.get(":nth-child(14) > label > input").check();
    cy.get(":nth-child(15) > label > input").check();
    cy.get(":nth-child(16) > label > input").check();
    cy.get(":nth-child(17) > label > input").check();
    cy.get(":nth-child(18) > label > input").check();
    cy.get(":nth-child(19) > label > input").check();
    cy.get(".reset > button").click();
    /* ==== End Cypress Studio ==== */
  });
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";

// Cypress.Commands.add("login", (email = "philliammee@yahoo.com") => {
//   cy.window().then(() => {
//     cy.request({
//       method: "POST",
//       url: "https://upw-net.lndo.site/graphql",
//       body: {
//         operationName: "login",
//         variables: {
//           device_name: "myWhiteBoard",
//           email,
//           password: "secret11",
//         },
//         query:
//           "mutation login($email: String!, $password: String!, $device_name: String!) {\n  login(email: $email, password: $password, device_name: $device_name)\n}\n",
//       },
//     }).then((res) => {
//       console.log(res.body);
//       localStorage.setItem("bearerToken", JSON.stringify(res.body));
//     });
//   });
// });

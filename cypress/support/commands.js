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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

//const cypress = require("cypress");

//Login from web page

Cypress.Commands.add("webLogin", (username, password) => {
  Cypress.log({
    name: "webLogin",
    message: username + " | " + password,
  });

  cy.get("#user-name").clear().type(username);
  cy.get("#password").clear().type(password);
  cy.get('input[type="submit"]').should("be.visible").click();
});

Cypress.Commands.add("addToCart", (num) => {
  cy.visit("https://www.saucedemo.com/");
  Cypress.log({
    name: "addToCart",
    number: num,
  });

  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("div").contains("Login").click();
  switch (num.toString()) {
    case "6":
      cy.get("[data-test=add-to-cart-test.allthethings()-t-shirt-(red)]").click;
    case "5":
      cy.get("[data-test = add-to-cart-sauce-labs-bike-light]").click();
    case "4":
      cy.get("[data-test = add-to-cart-sauce-labs-bolt-t-shirt]").click();
    case "3":
      cy.get("[data-test = add-to-cart-sauce-labs-backpack]").click();
    case "2":
      cy.get("[data-test = add-to-cart-sauce-labs-onesie]").click();
    case "1":
      cy.get("[data-test = add-to-cart-sauce-labs-fleece-jacket]").click();
  }
  cy.get(".shopping_cart_link").click();
});

Cypress.Commands.add("clearCart", () => {
  cy.visit("https://www.saucedemo.com/");
  Cypress.log({
    name: "clearCart",
  });

  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("div").contains("Login").click();
  cy.get(".shopping_cart_link").click();

  for (let i = 0; i < 5; i++) {
    cy.get("button").contains("Remove").click();
  }

  // for (let i = 0; i < cy.get(".cart_item").its("length"); i++) {
  //   cy.get("button").contains("Remove").click();
  // }
});

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
  Cypress.log({
    name: "addToCart",
    number: num,
  });

  //A complex way:

  // var items = new Array(num);

  // for (let i = 0; i < num; i++) {
  //   if (i == 0) {
  //     var random = Math.floor(Math.random() * 6) + 1;
  //     items[i] = random;
  //   } else {
  //     var random = Math.floor(Math.random() * 6) + 1;
  //     if (items.includes(random)) {
  //       i--;
  //       //break;
  //     } else {
  //       items[i] = random;
  //     }
  //   }
  // }

  // for (let j = 0; j < num; j++) {
  //   switch (items[j].toString()) {
  //     case "6":
  //       cy.get(
  //         "[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"
  //       ).click();
  //       break;
  //     case "5":
  //       cy.get("[data-test = add-to-cart-sauce-labs-bike-light]").click();
  //       break;
  //     case "4":
  //       cy.get("[data-test = add-to-cart-sauce-labs-bolt-t-shirt]").click();
  //       break;
  //     case "3":
  //       cy.get("[data-test = add-to-cart-sauce-labs-backpack]").click();
  //       break;
  //     case "2":
  //       cy.get("[data-test = add-to-cart-sauce-labs-onesie]").click();
  //       break;
  //     case "1":
  //       cy.get("[data-test = add-to-cart-sauce-labs-fleece-jacket]").click();
  //       break;
  //   }
  //}

  //A simpler way:

  function clickAddToCartButton(number) {
    if (number <= 0) return;
    cy.get('button:contains("Add to cart")').then((addToCartBtns) => {
      const length = Cypress.$(addToCartBtns).length;
      cy.log("length is" + length);
      const random = Math.floor(Math.random() * length);
      cy.get(addToCartBtns).eq(random).click();
      clickAddToCartButton(number - 1);
    });
  }

  clickAddToCartButton(num);
});

Cypress.Commands.add("clearCart", () => {
  Cypress.log({
    name: "clearCart",
  });

  // cy.get(".cart_item").then(($ci) => {
  //   for (let i = 0; i < $ci.length; i++) {
  //     cy.get("button").contains("Remove").click();
  //   }
  // });

  //Another way with each()
  cy.get(".cart_item").each((cartitem) => {
    cy.get(cartitem).contains("Remove").click();
  });
});

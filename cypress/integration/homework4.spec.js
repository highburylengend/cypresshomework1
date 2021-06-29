///<reference types="Cypress" />

describe("Verify logon function", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.get("#user-name").as("user");
    cy.get("#password").as("pass");
  });

  it.only("logon with correct username and password and add items to the shopping cart", () => {
    cy.get("@user").type("standard_user");
    cy.get("@pass").type("secret_sauce");
    cy.get("div").contains("Login").click();
    cy.get("div").should("have.class", "shopping_cart_container");

    cy.addToCart(3);
    cy.get(".shopping_cart_link").click();
    cy.get(".cart_item").its("length").should("eq", 3);

    cy.clearCart();
    cy.get("button").contains("Remove").should("have.length", 0);
  });

  it("logon with incorrect username", () => {
    cy.get("@user").type("locked_out_user");
    cy.get("@pass").type("secret_sauce");
    cy.get("div").contains("Login").click();
    cy.contains("Sorry, this user has been locked out.");
  });

  it("logon with incorrect password", () => {
    cy.get("@user").type("problem_user");
    cy.get("@pass").type("secret");
    cy.get("div").contains("Login").click();
    cy.contains("Username and password do not match any user in this service");
  });

  it("logon with empty password", () => {
    cy.get("@user").type("problem_user");
    cy.get("div").contains("Login").click();
    cy.contains("Password is required");
  });
});

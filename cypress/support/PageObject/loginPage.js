/// <reference types = "cypress"/>

export class LoginPage {
  static USER_NAME = "standard_user";
  static PASSWORD = "secret_sauce";

  visit() {
    cy.visit("https://www.saucedemo.com/");
  }

  login() {
    // cy.get("#user-name").type($LoginPage.USER_NAME);
    // cy.get("#password").type($LoginPage.PASSWORD);
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    cy.get("div").contains("Login").click();
  }
}

export const loginPage = new LoginPage();

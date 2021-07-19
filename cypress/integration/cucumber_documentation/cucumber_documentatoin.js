import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I am on the cucumber.js GitHub repository", () => {
  cy.visit("https://github.com/cucumber/cucumber-js");
});

When("I go to the README file", () => {
  cy.get('a[title="README.md"]').click();
});

Then('I should see a "Usage" section', () => {});

// Then("I should see a {string} badge", (badgeInfo) => {
//   cy.get('img[alt="${badgeInfo}"]').should("be.visible");
// });

Then('I should see a "Build Status" badge', () => {
  cy.get('img[alt="GitHub Actions"]').should("be.visible");
});

And('I should see a "Dependencies" badge', () => {
  cy.get('img[alt="Dependencies"]').should("be.visible");
});

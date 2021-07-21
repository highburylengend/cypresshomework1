import { homePage } from "../support/automationPage/homePage";

describe("Test search function", () => {
  before(() => {
    homePage.visit();
  });
  it("Search dress items", () => {
    homePage.search("Dress");
    cy.get(".product_list").children().should("have.length", 7);

    //Why this is not working?
    //因为find只会找到第一个满足条件的，所以我猜你这句话实际只返回给你1个li？
    //cy.get(".product_list").find('li').should("have.length", 7);
  });

  it("Search summer items", () => {
    homePage.search("summer");
    cy.get(".product_list").children().should("have.length", 4);
  });

  it("Search glasses items", () => {
    homePage.search("glasses");
    cy.contains("No results were found for your search").should("be.visible");
  });

  after(() => {});
});

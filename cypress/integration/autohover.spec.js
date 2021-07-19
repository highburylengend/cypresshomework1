import { homePage } from "../support/automationPage/homePage";

describe("Test hover function", () => {
  before(() => {
    homePage.visit();
  });

  it("Test hover in one item", () => {
    homePage.hoverin(1);

    //which is better of the following two???
    //cy.get(".button-container").should("be.visible");
    expect(cy.get('a[data-id-product="2"]').should("be.visible"));
  });

  //How to click the quick view of the hover item???
  // cy.get("ul[id=homefeatured]>li")
  //   .eq(num)
  //   .invoke("show")
  //   .get('a[class="quick-view-mobile"]')
  //   .click();
  // cy.get("#quantity_wanted").should("be.visible");

  it("Test on hover out one item", () => {
    homePage.hoverout();
    cy.contains("data-id-product").should("not.exist");
  });

  after(() => {});
});

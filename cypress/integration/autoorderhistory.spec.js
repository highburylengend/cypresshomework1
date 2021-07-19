import { orderHistoryPage } from "../support/automationPage/orderHistoryPage";
import { homePage } from "../support/automationPage/homePage";
import { accountPage } from "../support/automationPage/accountPage";

describe("Test order history page", () => {
  before(() => {
    homePage.visit();
    homePage.login();
  });

  it("check order numbers", () => {
    accountPage.goOrderHistory();
    cy.get("tbody>tr").should("have.length", 2);

    //Why the following call is incorrect???
    //orderHistoryPage.getOrders().should("have.length", 2);
  });

  //This case failed because the system signed out after clicking on the "Go back to account", don't know why???
  it("Go back to account page", () => {
    orderHistoryPage.goBackToAccount();
    cy.contains("order history and details").should("be.visible");
  });

  after(() => {
    homePage.logout();
  });
});

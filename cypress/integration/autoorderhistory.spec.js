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
    // 把orderHistoryPage.getOrders()的实现改成这样就好了
    //  getOrders() {
    //    return cy.get('tbody>tr');
    //  }
    //orderHistoryPage.getOrders().should("have.length", 2);
  });

  //This case failed because the system signed out after clicking on the "Go back to account", don't know why???
  // 我调查了下，可能和cypress在每个case的一开始清理cookies有关，详见这个文档https://docs.cypress.io/api/commands/clearcookies
  // 我把该文件第六行的before改成beforeEach，并且在你下面这个case里加一句话，这个问题就没了
  it("Go back to account page", () => {
    //accountPage.goOrderHistory();
    orderHistoryPage.goBackToAccount();
    cy.contains("order history and details").should("be.visible");
  });

  after(() => {
    homePage.logout();
  });
});

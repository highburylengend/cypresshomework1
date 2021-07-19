export class OrderHistoryPage {
  goHome() {
    cy.get('a[href="http://automationpractice.com"]').click();
  }

  goBackToAccount() {
    cy.get(".button").contains("Back to your account").click();
  }

  getOrders() {
    cy.get("tbody>tr").should("have.length", 2);
  }
}

export const orderHistoryPage = new OrderHistoryPage();

export class CartPage {
  deleteProd(num) {
    // cy.get(".cart_item").each((cartitem) => {
    //   cy.get(cartitem).contains("Remove").last.click();
    // });

    for (let i = 0; i < num; i++) {
      cy.get(".cart_item").contains("Remove").click();
    }
  }

  continueShopping() {
    cy.get("[data-test=continue-shopping]").click();
  }

  checkout() {
    cy.get("[data-test=checkout]").click();
  }

  validateItems(num) {
    //cy.get(".cart_item").contains("Remove").should("have.length", num);
    cy.get('button:contains("Remove")').should("have.length", num);
  }
}

export const cartPage = new CartPage();

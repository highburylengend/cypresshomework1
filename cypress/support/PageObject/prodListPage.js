export class ProdListPage {
  addToCart(num) {
    // if (num <= 0) return;
    // cy.get('button:contains("Add to cart")').then((addToCartBtns) => {
    //   const length = Cypress.$(addToCartBtns).length;
    //   cy.log("length is" + length);
    //   const random = Math.floor(Math.random() * length);
    //   cy.get(addToCartBtns).eq(random).click();
    //   addToCart(num - 1);
    //    });

    var items = new Array(num);

    for (let i = 0; i < num; i++) {
      if (i == 0) {
        var random = Math.floor(Math.random() * 6) + 1;
        items[i] = random;
      } else {
        var random = Math.floor(Math.random() * 6) + 1;
        if (items.includes(random)) {
          i--;
          //break;
        } else {
          items[i] = random;
        }
      }
    }

    for (let j = 0; j < num; j++) {
      switch (items[j].toString()) {
        case "6":
          cy.get(
            "[data-test='add-to-cart-test.allthethings()-t-shirt-(red)']"
          ).click();
          break;
        case "5":
          cy.get("[data-test = add-to-cart-sauce-labs-bike-light]").click();
          break;
        case "4":
          cy.get("[data-test = add-to-cart-sauce-labs-bolt-t-shirt]").click();
          break;
        case "3":
          cy.get("[data-test = add-to-cart-sauce-labs-backpack]").click();
          break;
        case "2":
          cy.get("[data-test = add-to-cart-sauce-labs-onesie]").click();
          break;
        case "1":
          cy.get("[data-test = add-to-cart-sauce-labs-fleece-jacket]").click();
          break;
      }
    }
  }

  goToCart() {
    cy.get(".shopping_cart_link").click();
    //cy.get("div").should("include", "Your Cart");
    cy.contains("Your Cart");
  }
}

export const prodListPage = new ProdListPage();

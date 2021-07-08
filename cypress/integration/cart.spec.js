import { loginPage } from "../support/pageObject/loginPage";
import { prodListPage } from "../support/pageObject/prodListPage";
import { cartPage } from "../support/pageObject/cartPage";

describe("Test Page object", () => {
  it("Manipulate the products", () => {
    loginPage.visit();
    loginPage.login();

    prodListPage.addToCart(2);
    prodListPage.goToCart();

    cartPage.validateItems(2);

    cartPage.deleteProd(1);
    cartPage.validateItems(1);

    cartPage.continueShopping();

    prodListPage.addToCart(1);
    prodListPage.goToCart();

    cartPage.validateItems(2);

    cartPage.checkout();
  });
});

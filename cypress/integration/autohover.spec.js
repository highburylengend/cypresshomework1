import { homePage } from "../support/automationPage/homePage";

describe("Test hover function", () => {
  before(() => {
    homePage.visit();
  });

  it("Test hover in one item", () => {
    homePage.hoverin(1);

    //which is better of the following two???
    // 我会倾向于用第一个，因为定义比较简单，看起来class name也不会很轻易改动。但如果第二个定义里‘2’这个值是稳定的，那第二个也是可以考虑的。不过第二句话可以去掉expect，直接这么写cy.get('a[data-id-product="2"]').should("be.visible");
    //cy.get(".button-container").should("be.visible");
    expect(cy.get('a[data-id-product="2"]').should("be.visible"));
  });

  //How to click the quick view of the hover item???
  // 我这么写能调用出来
  //    cy.get('ul[id=homefeatured]>li')
  //    .eq(1)
  //    .contains('Quick view')
  //    .click();
  // 你的原始代码如果这么改，能跳转到商品页面。不过就不是悬停的哪个popover了
  //    cy.get('ul[id=homefeatured]>li')
  //    .eq(1)
  //    .find('a[class="quick-view-mobile"]')
  //    .click({ force: true });
  
  
  
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

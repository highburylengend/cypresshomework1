export class HomePage {
  visit() {
    cy.visit("http://automationpractice.com/index.php");
  }

  login() {
    cy.get(".login").click();
    cy.get('input[id="email"]').clear().type("testweb@gmail.com");
    cy.get('input[id="passwd"]').clear().type("123456789");
    cy.get("#SubmitLogin").click();
  }

  search(keyword) {
    cy.get('input[name="search_query"]').clear().type(keyword);
    cy.get('button[name="submit_search"]').click();
  }

  hoverin(num) {
    //cy.get("ul.homefeatured>li:nth-of-type(num)").invoke("show").click();

    //The following two both work
    //cy.get("ul[id=homefeatured]>li").eq(num).invoke("show").click();
    cy.get("ul[id=homefeatured]>li").eq(num).trigger("mouseover");
  }

  hoverout() {
    cy.get("div.header-container").trigger("mouseover");
  }

  logout() {
    cy.get('a[class="logout"]').click();
  }
}

export const homePage = new HomePage();

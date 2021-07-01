///<reference types="Cypress" />

describe("Browser Action", () => {
  it("should load correct url", () => {
    cy.visit("http://example.com/");
    cy.url().should("include", "example");
    cy.wait(3000);
    // cy.pause();
    cy.contains("This domain is for use");
    cy.get("a[href]").should("be.visible");
  });

  it("interact with buttons", () => {
    cy.visit("https://demoqa.com/buttons");
    cy.url().should("include", "buttons");

    cy.get('button:contains("Click Me")').should("have.length", 3);

    //cy.get('button:contains("Click Me")').its("length").should("eq", 3);

    //not work
    //cy.get("button").contains("Click Me").click();

    //not work
    //cy.contains("Click Me").last().click();

    //This is working
    cy.get('button:contains("Click Me")').last().click();
    cy.contains("You have done a dynamic click").should("be.visible");
  });

  it("Click hidden elements", () => {
    cy.visit("https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp");
    cy.get("button").contains("Toggle Hide and Show").click();

    cy.log("before wait");
    cy.wait(1000);
    cy.log("after wait");

    //test case failed at this step
    //cy.get("div").contains("Click the button!").click();

    //add a {force: true} parameter
    cy.get("div").contains("Click the button!").click({ force: true });
  });

  it("should load books website", () => {
    cy.visit("http://books.toscrape.com/index.html", { timeout: 10000 });
    cy.url().should("include", "index.html");
    cy.log("Before Reload");
    cy.reload();
    cy.log("After Reload");
  });

  it("successful login with correct credentials", () => {
    cy.visit("https://demoqa.com/login");
    cy.get("#userName").clear().type("123456@gmail.com");
    cy.get("#userName").clear().type("helloword@outlook.com");
    cy.get("#password").type("abcpassword");
    cy.get("button#login").click();
  });

  it("checkbox interactions", () => {
    cy.visit("https://demoqa.com/checkbox");
    cy.get('button[title = "Expand all"').click();
    cy.wait(1000);
    cy.get("input#tree-node-notes").click({ force: true });
    cy.wait(1000);
    cy.get("input#tree-node-documents").click({ force: true });
  });

  it("chained assertion", () => {
    cy.visit("zero.webappsecurity.com/login.html");
    cy.contains("Sign in").click();
    cy.get(".alert-error")
      .should("be.visible")
      .and("contain", "Login and/or password are wrong");
  });

  it.only("scrolling on the page", () => {
    cy.visit("http://github.com/cypress-io/cypress");
    cy.scrollTo("bottom");
    cy.wait(2000);
    cy.scrollTo("top");
    cy.wait(2000);
    cy.scrollTo(0, 2000);
    cy.wait(2000);
    cy.contains("Please see our").scrollIntoView();
    cy.wait(2000);
  });
});

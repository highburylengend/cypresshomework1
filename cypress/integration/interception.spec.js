describe("Req Interception and Stub Resp", () => {
  before(() => {
    cy.visit("https://demo.realworld.io/#/editor/");
    cy.contains("Sign in").click();
    cy.get("input[placeholder=Email]").clear().type("hshbupt@gmail.com");
    cy.get("input[placeholder=Password]").clear().type("123456789");
    cy.get('button:contains("Sign in")').click();
  });

  it("Validate HTTP request for adding a new article", () => {
    cy.get("a[href='#/editor/']").click();
    cy.get("input.form-control-lg").type("Article004");
    cy.get('input[ng-model ="$ctrl.article.description"] ').type("zxc");
    cy.get('textarea[ng-model ="$ctrl.article.body"] ').type("vbn");

    cy.intercept("POST", "https://conduit.productionready.io/api/articles").as(
      "new-Article"
    );

    cy.get("button").contains("Publish Article").click();

    cy.get("@new-Article")
      .its("request.headers")
      .should(($headers) => {
        cy.log($headers);
        //expect($headers.'Content-type').contains("application/json");
      });
    //.should("have.property", "content-type", "application/json");

    cy.get("@new-Article")
      .its("request.body")
      .should(
        "deep.eq",
        JSON.stringify({
          body: "vbn",
          description: "zxc",
          tagList: [],
          title: "Article004",
        })
      );
  });

  it("Stub network response", () => {
    cy.intercept(
      "GET",
      "https://conduit.productionready.io/api/articles?author=Test002&limit=5&offset=0",
      { fixture: "response.json" }
    );
    cy.visit("https://demo.realworld.io/#/@Test002");
  });

  it("Stub network response continued", () => {
    cy.intercept(
      "GET",
      "https://conduit.productionready.io/api/articles?author=Test002&limit=5&offset=0",
      { fixture: "articledata.json" }
    );
    cy.visit("https://demo.realworld.io/#/@Test002");
  });
});

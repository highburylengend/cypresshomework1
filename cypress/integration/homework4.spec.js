Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});

describe("hook test", () => {
  before(() => {
    cy.visit("http://a.testaddressbook.com/addresses");
    cy.get("#session_email").clear().type("hshbupt@gmail.com");
    cy.get("#session_password").clear().type("123456789");
    cy.get("[data-test=submit]").click();
  });

  afterEach(() => {
    //cy.wait(2000);
    cy.get("td").contains("Destroy").last.click();
  });

  after(() => {
    cy.get("[data-test='sign-out']").click();
  });

  it("add new address", () => {
    cy.get("[data-test=create]").click();
    cy.get("#address_first_name").clear().type("Ming");
    cy.get("#address_last_name").clear().type("Li");
    cy.get("#address_street_address").clear().type("123, rue Berlioz");
    cy.get("#address_city").clear().type("Montreal");
    cy.get("#address_zip_code").clear().type("H3E123");
    cy.get(".btn-primary").click();
    cy.get("[data-test=list]").click();
  });
});

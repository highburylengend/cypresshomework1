describe("apitest", () => {
  before(() => {
    cy.request("GET", "/users?id=2").then((response) => {
      if (response.body) {
        cy.request("DELETE", "/user?id=2").then((response) => {
          expect(response.status).equal(204);
        });
      }
    });
  });

  it("Test POST", () => {
    const user = {
      name: "James",
      job: "QA",
    };

    cy.request("POST", "/users", user)
      .its("body")
      .should("include", { name: "James" });
  });

  it("Test GET", () => {
    cy.request("GET", "/users?id=2").then((response) => {
      expect(response.body.data.first_name).equal("Janet");
    });
  });

  it("Test Patch", () => {
    const user = {
      first_name: "Jane",
    };
    cy.request("PATCH", "/user?id=2", user).then((response) => {
      expect(response.status).equal(200);
      expect(response.body.first_name).equal("Jane");
    });
  });

  it("Test GET", () => {
    cy.request("GET", "/users?id=2").then((response) => {
      expect(response.body.data.last_name).equal("Weaver");
    });
  });
});

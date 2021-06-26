describe("Wait for color change button", () => {
  it("By update cypress.json", () => {
    cy.visit("https://demoqa.com/dynamic-properties", { timeout: 3000 });
    //cy.visit("https://demoqa.com/dynamic-properties");
    cy.get(".text-danger").should("be.visible");
  });
});

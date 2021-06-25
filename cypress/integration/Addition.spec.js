context("Addition", () => {});

describe("Add two numbers", () => {
  it(".should() - make an assertion about the addition", () => {
    cy.expect(10 + 15).to.equal(25);
  });
});

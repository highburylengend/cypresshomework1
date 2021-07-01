describe("Interaction and assertion with Dropdown, Checkbox,Option", () => {
  it("dropdown and radio box interactions", () => {
    cy.visit(
      "https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
    );
    cy.get("#dropdowm-menu-1").select("Python");
    cy.get("#dropdowm-menu-1").should("have.value", "python");

    cy.wait(1000);

    cy.get('#checkboxes input[value="option-2"]').click();
    cy.get('#checkboxes input[value="option-2"]').should("be.checked");

    cy.wait(1000);

    cy.get('#radio-buttons input[value="yellow"]').click();

    cy.wait(1000);
    cy.get('#radio-buttons-selected-disabled input[value="cabbage"]').should(
      "be.disabled"
    );
  });
});

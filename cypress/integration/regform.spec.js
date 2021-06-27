describe("Registration Form", () => {
  it("fill out the registration form", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.fixture("profile.json").then((regInfo) => {
      cy.get("#firstName").clear().type(regInfo.Student1.FirstName);
      cy.get("#lastName").clear().type(regInfo.Student1.LastName);
      cy.get("#userEmail").clear().type(regInfo.Student1.Email);
      for (let i = 0; i < 3; i++) {
        if (regInfo.Student1.Gender == "Male") {
          cy.get("#gender-radio-1").click({ force: true });
          break;
        } else if (regInfo.Student1.Gender == "Female") {
          cy.get("#gender-radio-2").click({ force: true });
          break;
        } else {
          cy.get("#gender-radio-3").click({ force: true });
          break;
        }
      }
      cy.get("#userNumber").clear().type(regInfo.Student1.Mobile);
      //  cy.get(".css-1uccc91-singleValue").type(regInfo.Student1.State);
      //  cy.get("#react-select-4-input").clear().type(regInfo.Student1.City);
      cy.get("#submit").click();

      cy.get("table")
        .contains("td", regInfo.Student1.FirstName)
        .should("be.visible");
      cy.get("table")
        .contains("td", regInfo.Student1.LastName)
        .should("be.visible");
      cy.get("table")
        .contains("td", regInfo.Student1.Email)
        .should("be.visible");
      cy.get("table")
        .contains("td", regInfo.Student1.Gender)
        .should("be.visible");
      cy.get("table")
        .contains("td", regInfo.Student1.Mobile)
        .should("be.visible");
      //cy.get("table")
      //  .contains("td", regInfo.Student1.State)
      //  .should("be.visible");
      //cy.get("table")
      //  .contains("td", regInfo.Student1.City)
      //  .should("be.visible");
    });
  });
});

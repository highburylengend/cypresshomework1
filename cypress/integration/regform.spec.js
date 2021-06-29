describe("Registration Form", () => {
  it("fill out the registration form", () => {
    cy.visit("https://demoqa.com/automation-practice-form");
    cy.fixture("profile.json").then((regInfo) => {
      cy.get("#firstName").clear().type(regInfo.Student1.FirstName);
      cy.get("#lastName").clear().type(regInfo.Student1.LastName);
      cy.get("#userEmail").clear().type(regInfo.Student1.Email);

      if (regInfo.Student1.Gender == "Male") {
        cy.get("#gender-radio-1").click({ force: true });
      } else if (regInfo.Student1.Gender == "Female") {
        cy.get("#gender-radio-2").click({ force: true });
      } else {
        cy.get("#gender-radio-3").click({ force: true });
      }

      cy.get("#userNumber").clear().type(regInfo.Student1.Mobile);

      cy.get("#react-select-3-input")
        .click({ force: true })
        .type(regInfo.Student1.State)
        .type("{enter}");

      cy.get("#react-select-4-input")
        .click({ force: true })
        .type(regInfo.Student1.City)
        .type("{enter}");

      //cy.get("#css-26l3qy-menu").select("Haryana");
      //cy.xpath('//*[@id="react-select-3-input"]').type(regInfo.Student1.State);

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
      cy.get("table")
        .contains("td", regInfo.Student1.State)
        .should("be.visible");
      cy.get("table")
        .contains("td", regInfo.Student1.City)
        .should("be.visible");
    });
  });
});

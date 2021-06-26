describe("using fixture in login testing", () => {
  it("glitch user", () => {
    cy.visit("https://www.saucedemo.com");
    cy.fixture("login.json").then((loginInfo) => {
      cy.log(JSON.stringify(loginInfo));
      //login with valid username and password
      cy.get("#user-name").clear().type(loginInfo.performance.user);

      //use keyboard character
      cy.get("#password")
        .clear()
        .type(loginInfo.performance.password + "{enter}");

      //Use login button
      //cy.get("#password").clear().type(loginInfo.performance.password);
      //cy.get('input[type="submit"]').should("be.visible").click();

      //check login success
      cy.get("body", { timeout: 10 }).should("contain", "Products");
    });
  });

  it.only("Successful login", () => {
    cy.visit("https://www.saucedemo.com");
    cy.fixture("login").then((loginInfo) => {
      cy.webLogin(
        loginInfo.correct_credential.user,
        loginInfo.correct_credential.password
      );

      //check login success
      cy.url().should("contain", "inventory");
    });
  });
});

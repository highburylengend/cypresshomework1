describe("login testing by using xpath locator", () => {
  it("failed login with incorrect credentials", () => {
    cy.visit("https://demoqa.com/login");
    cy.xpath('//*[@id="userName"]').clear().type("123456@gmail.com");
    cy.xpath('//*[@id="password"]').type("abcpassword");
    cy.xpath('//*[@id="login"]').click();
  });
});

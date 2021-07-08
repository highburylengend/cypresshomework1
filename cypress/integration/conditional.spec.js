describe("Conditional testing", () => {
  it("Random number test", () => {
    cy.visit(
      "https://www.calculator.net/random-number-generator.html?slower=1&supper=100&ctype=1&s=6516&submit1=Generate"
    );
    cy.xpath(
      '//*[@id="content"]/form[1]/table/tbody/tr/td/table/tbody/tr[3]/td/input[3]'
    ).click();

    //  const num = parseInt(cy.get("p").eq(1).invoke("text").then(parseInt));

    cy.get("p")
      .eq(1)
      .invoke("text")
      .then((text) => {
        const num = parseInt(text, 10);

        cy.log(num);

        if (num < 50) {
          cy.log("the value is less than 50");
        } else {
          cy.log("the value is greater than 49");
        }
      });
  });
});

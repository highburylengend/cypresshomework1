describe("logged in user", () => {
  context("test suite 1", () => {
    it("tests11", () => {
      cy.log("!!!!!!Test 1 !!!!!!");
    });

    it.skip("tests12", () => {
      cy.log("!!!!!!Test 2!!!!!!");
    });

    it("tests13", () => {
      cy.log("!!!!!!Test 3!!!!!!");
    });

    it("tests14", () => {
      cy.log("!!!!!!Test 4!!!!!!");
    });
  });

  context("test suite 2", () => {
    it("tests21", () => {
      cy.log("!!!!!!Test 1 !!!!!!");
    });

    it.skip("tests22", () => {
      cy.log("!!!!!!Test 2!!!!!!");
    });

    it("tests23", () => {
      cy.log("!!!!!!Test 3!!!!!!");
    });

    it("tests24", () => {
      cy.log("!!!!!!Test 4!!!!!!");
    });
  });

  before(() => {
    cy.log("!before() function performed!");
  });

  after(() => {
    cy.log("!after() function performed!");
  });

  beforeEach(() => {
    cy.log("!beforeEach() function performed!");
  });

  afterEach(() => {
    cy.log("!afterEach() function performed!");
  });
});

describe("another describe block", () => {});

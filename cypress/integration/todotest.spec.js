describe("Test ToDo List", () => {
  // before(() => {
  //   cy.request({
  //     url: "https://docket-test.herokuapp.com/api/Todo",
  //     headers: {
  //       token: "5199cb84-bd89-47e1-aecd-c2b085579727",
  //     },
  //   }).then((response) => {
  //     response.forEach((item) => {
  //       cy.request("DELETE", "").then((response) => {
  //         expect(response.status).equal(204);
  //       });
  //     });
  //   });

  after(() => {});

  it("add two ToDo items", () => {
    // const todoItem = {
    //   body: "fff",
    // };
    // cy.request(
    //   "POST",
    //   "https://docket-test.herokuapp.com/api/Todo",
    //   todoItem
    // ).should("include", { body: "fff" });

    cy.request({
      method: "POST",
      url: "https://docket-test.herokuapp.com/api/Todo",
      headers: {
        token: "5199cb84-bd89-47e1-aecd-c2b085579727",
      },
      body: {
        body: "abc",
      },
    }).then((response) => {
      expect(response.status).eq(200);
      expect(response.body.Todo).equal("abc");
    });
  });
});

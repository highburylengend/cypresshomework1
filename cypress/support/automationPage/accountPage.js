export class AccountPage {
  goHome() {
    cy.get('a[title="home"]').click();
  }

  goOrderHistory() {
    cy.get('a[title="Orders"]').click();
  }
}

export const accountPage = new AccountPage();

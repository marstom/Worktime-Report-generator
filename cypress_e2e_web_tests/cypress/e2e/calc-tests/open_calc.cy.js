/// <reference types="cypress" />

import dayjs from "dayjs";

describe("web page tommar opens", () => {
  // beforeEach(() => {
  //   cy.visit('http://localhost:3000/')
  // })

  it("my tommar app opens", () => {
    cy.visit("http://localhost:3000/");
    cy.get("h1").contains("Tommar");
  });

  it("goto calc and page title is visible", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=username]").type(Cypress.env("username"));
    cy.get("input[name=password]").type(Cypress.env("password"));
    cy.get("button").contains("Login").click();
    cy.get("a").contains("This Calc!").click();
    cy.get("h1").contains("Hours calc");
  });

  it("goto calc, pick todays date and save item!", () => {
    cy.visit("http://localhost:3000/login");
    cy.get("input[name=username]").type(Cypress.env("username"));
    cy.get("input[name=password]").type(Cypress.env("password"));
    cy.get("button").contains("Login").click();
    cy.get("a").contains("This Calc!").click();
    cy.get("h1").contains("Hours calc");

    const todaysDate = dayjs().format("YYYY-MM-DD");
    cy.get("input[type=date]").type(todaysDate);
    cy.get("input[type=date]").click();

    cy.get("textarea").type("This is task by Cypress");

    cy.get('[data-testid="minute-input"]').type(20);
    cy.get('[data-testid="hour-input"]').type(1);
    cy.get('[data-testid="add-button"]').click();
  });
});

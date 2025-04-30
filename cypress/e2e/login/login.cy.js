import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { loginObjects } from "../../pageObjects/pageObjects";

//Config
const creds = Cypress.env('creds');

Given("user is in the login page", () => {
  cy.visit("staging.rockygo.com/login");
});

When("user is logging in", () => {
  cy.get(loginObjects.emailField).type(creds.standardUser);
  cy.get(loginObjects.passwordField).type(creds.password);
  cy.get(loginObjects.userType).check(); // Optional if required
  cy.clickSubmit();
});

Then("user is logged in", () => {
  cy.assertDashboard();
});

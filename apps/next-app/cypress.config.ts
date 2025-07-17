import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    specPattern: "cypress/component/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/component.ts",
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
})

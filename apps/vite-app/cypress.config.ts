import { defineConfig } from "cypress"

export default defineConfig({
  component: {
    specPattern: "cypress/**/*.cy.{ts,tsx}",
    supportFile: "cypress/support/component.ts",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    baseUrl: "http://localhost:4173",
    supportFile: false,
  },
})

import { defineConfig } from "cypress"
import path from "path"

export default defineConfig({
  component: {
    specPattern: path.resolve(
      __dirname,
      "../../packages/ui/cypress/component/**/*.cy.{ts,tsx}"
    ),
    supportFile: path.resolve(
      __dirname,
      "../../packages/ui/cypress/support/component.ts"
    ),
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
  e2e: {
    specPattern: path.resolve(
      __dirname,
      "../../packages/ui/cypress/e2e/**/*.cy.{ts,tsx}"
    ),
    baseUrl: "http://localhost:4173",
    supportFile: false,
  },
})

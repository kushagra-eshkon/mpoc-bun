import { defineConfig } from "vitest/config"

export default defineConfig({
  test: {
    projects: ["apps/*", "packages/*"],
    globals: false,
    environment: "node",
    coverage: {
      provider: "v8",
      reporter: ["text", "json-summary"],
    },
    exclude: ["**/node_modules/**", "**/*.cy.{ts,tsx}", "**/test/**"],
  },
})

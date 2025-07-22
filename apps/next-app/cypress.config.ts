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
      framework: "next",
      bundler: "webpack",
      webpackConfig: {
        resolve: {
          alias: {
            "@mpoc/ui": path.resolve(__dirname, "../../packages/ui/src"),
          },
        },
        module: {
          rules: [
            {
              test: /\.(js|jsx|ts|tsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: ["next/babel"],
                },
              },
            },
          ],
        },
      },
    },
  },
  e2e: {
    specPattern: "cypress/e2e/**/*.cy.{ts,tsx}",
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
})

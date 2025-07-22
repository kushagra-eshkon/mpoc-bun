import React from "react"

import { Counter } from "@mpoc/ui"
import { Provider } from "react-redux"
import { store } from "@mpoc/store"

describe("<Counter />", () => {
  beforeEach(() => {
    cy.mount(
      <Provider store={store}>
        <Counter />
      </Provider>
    )
  })

  it("renders with initial value 0", () => {
    cy.get("div").contains("Count: 0").should("exist")
  })

  it("increments the counter", () => {
    cy.contains("+").click()
    cy.get("div").contains("Count: 1")
  })

  it("decrements the counter", () => {
    cy.contains("+").click()
    cy.contains("−").click()
    cy.get("div").contains("Count: 1")
  })

  it("resets the counter", () => {
    cy.contains("+").click()
    cy.contains("Reset").click()
    cy.get("div").contains("Count: 0")
  })
})

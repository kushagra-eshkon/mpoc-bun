describe("Shared Counter component", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders with initial value 0", () => {
    cy.contains("Count: 0").should("exist")
  })

  it("increments the count", () => {
    cy.contains("+").click()
    cy.contains("Count: 1")
  })

  it("decrements the count", () => {
    cy.contains("+").click()
    cy.contains("-").click()
    cy.contains("Count: 1")
  })

  it("resets the count", () => {
    cy.contains("+").click().click()
    cy.contains("Reset").click()
    cy.contains("Count: 0")
  })
})

describe("Shared Card component", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders headline", () => {
    cy.get("[id=card-title]").should(
      "contain.text",
      "ISRO Announces Chandrayaan‑5 Lunar Rover Mission"
    )
  })

  it("displays the image with correct alt", () => {
    cy.get('img[alt*="Chandrayaan-5"]')
      .should("have.attr", "src")
      .and("include", "/chandrayaan-5.jpg")
  })

  it("has descriptive paragraph", () => {
    cy.contains("a next-gen lunar exploration mission").should("exist")
  })

  it("links to isro.gov.in", () => {
    cy.get('a[href*="isro.gov.in"]').should("have.attr", "target", "_blank")
  })

  it("has accessible region landmark", () => {
    cy.get("[role=region]").should("have.attr", "aria-labelledby", "card-title")
  })
})

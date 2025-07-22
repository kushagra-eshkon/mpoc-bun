import React from "react"
import { Card } from "@mpoc/ui"

describe("<Card />", () => {
  beforeEach(() => {
    cy.mount(<Card />)
  })

  it("renders article with proper role", () => {
    cy.get("article[role='region']").should("exist")
  })

  it("renders image with correct attributes", () => {
    cy.get("img")
      .should("have.attr", "src", "/chandrayaan-5.jpg")
      .and("have.attr", "alt", "Concept image of ISRO Chandrayaan-5 rover")
      .and("have.attr", "role", "presentation")
  })

  it("renders heading with id and text", () => {
    cy.get("h1#card-title").should(
      "contain.text",
      "ISRO Announces Chandrayaan‑5 Lunar Rover Mission"
    )
  })

  it("renders description paragraph", () => {
    cy.get("p").should(
      "contain.text",
      "ISRO has officially approved Chandrayaan‑5, a next-gen lunar exploration mission featuring a 350 kg rover developed in collaboration with JAXA. Launch window and mission specifics will be finalized by late 2025."
    )
  })

  it("renders anchor with correct href and text", () => {
    cy.get("a")
      .should(
        "have.attr",
        "href",
        "https://www.isro.gov.in/Chandrayaan3_Details.html"
      )
      .and("contain.text", "Read more about Chandrayaan‑5 on isro.gov.in")
      .and("have.attr", "target", "_blank")
      .and("have.attr", "rel", "noopener noreferrer")
  })
})

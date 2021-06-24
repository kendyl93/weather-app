import React from "react"
import { render, screen, cleanup } from "@testing-library/react"
import Header from "../Header"

afterEach(cleanup)

describe("Header", () => {
  it("renders welcome message", () => {
    render(<Header />)

    expect(screen.getByText("Name")).toBeInTheDocument()
    expect(screen.getByText("Lat")).toBeInTheDocument()
    expect(screen.getByText("Lng")).toBeInTheDocument()
    expect(screen.getByText("Alt")).toBeInTheDocument()
  })
})

import React from "react"
import { render, screen, cleanup } from "../tests/utils"
import App from "../App"

afterEach(cleanup)

describe("App", () => {
  it("Renders the app with initialState", () => {
    render(<App />)

    expect(screen.getByTestId("app-page")).toBeInTheDocument()
  })
})

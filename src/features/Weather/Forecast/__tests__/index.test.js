import React from "react"
import { cleanup, render, screen } from "../../../../tests/utils"
import Forecast from ".."

afterEach(cleanup)

describe("Forecast", () => {
  it("should render the Forecast", () => {
    const forecast = []
    render(<Forecast forecast={forecast} />)

    expect(screen.getByTestId("no-forecast")).toBeInTheDocument()
  })

  it("should render the forecast in case it exists", () => {
    const forecast = [
      {
        temp: { min: 0, max: 8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
    ]
    render(<Forecast forecast={forecast} />)
    expect(screen.getByTestId("forecast")).toBeInTheDocument()
    expect(screen.getByRole("listitem")).toBeInTheDocument()
  })

  it("should render only one row in case showForecast is disabled", () => {
    const forecast = [
      {
        temp: { min: 0, max: 18 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: 30, max: 38 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: -10, max: -8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
    ]
    render(<Forecast forecast={forecast} />)
    expect(screen.getAllByRole("listitem").length).toEqual(1)
  })

  it("should render 5 rows in case showForecast is enabled", () => {
    const forecast = [
      {
        temp: { min: 0, max: 18 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: 30, max: 38 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: -10, max: -8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: -10, max: -8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: -10, max: -8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: -10, max: -8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
      {
        temp: { min: -10, max: -8 },
        weather: [{ id: 1, description: "sun", icon: "01d" }],
        dt: 1623222000,
      },
    ]
    render(<Forecast forecast={forecast} showForecast={true} />)
    expect(screen.getAllByRole("listitem").length).toEqual(5)
  })
})

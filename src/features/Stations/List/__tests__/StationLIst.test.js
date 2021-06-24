import React from "react"
import { cleanup, render, screen } from "../../../../tests/utils"
import StationsList from "../StationsList"

afterEach(cleanup)

describe("StationList", () => {
  it("should render the StationsList", () => {
    const stations = []
    render(<StationsList stations={stations} />)

    expect(screen.getByTestId("station-list")).toBeInTheDocument()
  })

  it("should render the StationsList in case some stations exists", () => {
    const stations = [
      { id: 1, name: "Oslo 1", latitude: 50, longitude: 20, altitude: 10 },
    ]
    render(<StationsList stations={stations} />)
    expect(screen.getByTestId("station-list")).toBeInTheDocument()
    expect(screen.getByRole("listitem")).toBeInTheDocument()
  })

  it("should render all station rows", () => {
    const stations = [
      { id: 11, name: "Barcelona", latitude: 50, longitude: 20, altitude: 10 },
      { id: 22, name: "Norway", latitude: 50, longitude: 20, altitude: 10 },
      { id: 33, name: "Oslo", latitude: 50, longitude: 20, altitude: 10 },
    ]
    render(<StationsList stations={stations} />)
    expect(screen.getAllByRole("listitem").length).toEqual(3)
  })
})

import React from "react"
import { cleanup, render } from "../../../../tests/utils"
import TableHeader from "../TableHeader"

afterEach(cleanup)

describe("TableHeader snapshot test", () => {
  test("should match base snapshot", () => {
    const { asFragment } = render(<TableHeader />)

    expect(asFragment(<TableHeader />)).toMatchSnapshot()
  })
})

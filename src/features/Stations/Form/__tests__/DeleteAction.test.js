import React from "react"
import { Provider } from "react-redux"
import configureStore from "../../../../store"
import { render, fireEvent, screen, cleanup } from "@testing-library/react"
import DeleteAction from "../DeleteAction"

afterEach(cleanup)

const store = configureStore()

describe("DeleteAction", () => {
  it("should renders delete action button and call action", async () => {
    const action = jest.fn()
    render(
      <Provider store={store}>
        <DeleteAction action={action} />
      </Provider>
    )

    expect(screen.getByTestId("delete-button")).toBeInTheDocument()

    fireEvent.click(screen.getByTestId("delete-button"))

    expect(action).toHaveBeenCalled()
  })
})

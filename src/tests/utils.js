import React from "react"
import { render as rtlRender } from "@testing-library/react"
import { Router } from "react-router-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import reducer from "../store/rootReducer"
import { ThemeProvider } from "@material-ui/styles"
import { createMemoryHistory } from "history"

import theme from "../theme"

const history = createMemoryHistory()

const render = (
  ui,
  { initialState, store = createStore(reducer, initialState), ...renderOptions } = {}
) => {
  const Wrapper = ({ children }) => {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Router history={history}>{children}</Router>
        </ThemeProvider>
      </Provider>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from "@testing-library/react"
export { render }

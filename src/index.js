import React from "react"
import ReactDOM from "react-dom"
import { ThemeProvider } from "@material-ui/styles"
import configureStore from "./store"
import { Provider } from "react-redux"
import * as serviceWorker from "./serviceWorker"
import Router from "./Router"
import theme from "./theme"

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

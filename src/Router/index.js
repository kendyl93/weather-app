import React from "react"
import { ThemeProvider } from "@material-ui/styles"
import { createMuiTheme } from "@material-ui/core"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import App from "../App"

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
})

const Router = () => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>
)

export default Router

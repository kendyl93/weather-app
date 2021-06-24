import { createMuiTheme } from "@material-ui/core"
import palette from "./palette"
import typography from "./typography"

const baseTheme = {
  palette,
  typography,
}
const theme = createMuiTheme(baseTheme)

export default theme

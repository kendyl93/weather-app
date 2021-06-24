import TextField from "@material-ui/core/TextField"
import Input from "@material-ui/core/Input"
import { asLatitude, asLongitude } from "./validators"

const inputsData = [
  {
    placeholder: "Name",
    name: "name",
    Tag: TextField,
  },
  {
    placeholder: "Latitude",
    type: "number",
    helperText: "Should be between -90 and 90",
    validator: (value) => asLatitude(value),
    name: "latitude",
    Tag: TextField,
  },
  {
    placeholder: "Longitude",
    type: "number",
    helperText: "Should be between -180 and 180",
    validator: (value) => asLongitude(value),
    name: "longitude",
    Tag: TextField,
  },
  {
    placeholder: "Altitude",
    type: "number",
    name: "altitude",
    Tag: Input,
  },
]

export default inputsData

import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined"
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined"
import Weather from "../features/Weather"
import Stations from "../features/Stations"

export default [
  {
    path: "/weather",
    label: "Weather",
    Component: Weather,
    Icon: CloudOutlinedIcon,
  },
  {
    path: "/stations",
    label: "Stations",
    Component: Stations,
    Icon: AddCircleOutlineOutlinedIcon,
  },
]

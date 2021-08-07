import CloudOutlinedIcon from "@material-ui/icons/CloudOutlined";
import Weather from "../features/Weather";

const routes = [
  {
    path: "/weather",
    label: "Weather",
    Component: Weather,
    Icon: CloudOutlinedIcon,
  },
];

export default routes;

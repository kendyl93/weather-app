import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  buttonWrapper: {
    color: "#333",
    transition: "color .15s ease-in",

    "&:hover": {
      color: "red",
      cursor: "pointer",
    },
  },
  loading: {
    width: "20px !important",
    height: "20px !important",
    color: "red",
  },
}));

export default useStyles;

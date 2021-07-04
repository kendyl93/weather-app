import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import DeleteActionProps from "./types";
import { selectStationLoading } from "../../../../store/weatherStations/selectors";
import Loading from "../../../../components/Loading";

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

const DeleteAction: FunctionComponent<DeleteActionProps> = ({ action }) => {
  const classes = useStyles();
  const loading = useSelector(selectStationLoading);

  return loading ? (
    <Loading color="red" />
  ) : (
    <div className={classes.buttonWrapper}>
      <DeleteForeverOutlinedIcon data-testid="delete-button" onClick={action} />
    </div>
  );
};

export default DeleteAction;

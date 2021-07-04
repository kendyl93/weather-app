import { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import DeleteActionProps from "./types";
import useStyles from "./styles";
import { selectStationLoading } from "../../../../store/weatherStations/selectors";
import Loading from "../../../../components/Loading";

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

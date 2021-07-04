import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeStationWithLoading } from "../../../store/weatherStations/actionCreators";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import Header from "./Header";
import DeleteAction from "../Form/DeleteAction";

const useStyles = makeStyles((theme) => ({
  tableWrapper: {
    display: "grid",
    width: "100%",
  },
  row: {
    display: "grid",
    textAlign: "center",
    alignItems: "center",
    gridTemplateColumns: "1fr 70px 70px 70px 30px",
    height: "54px",
    padding: "0 8px",

    "&:nth-child(odd)": {
      background: "#CCC",
    },

    "&:first-child": {
      "& p": {
        fontWeight: 700,
      },

      "& p:first-child": {
        textAlign: "left",
      },
    },
  },
  nameWrapper: {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    textAlign: "left",

    "& p": {
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
}));

const handleDeleteStation = (id) => (dispatch) => () =>
  removeStationWithLoading(id)(dispatch);

const StationsList = ({ stations = [] }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.tableWrapper} data-testid="station-list">
      {stations.length > 0 && <Header />}
      {stations.map(({ id, name, latitude, longitude, altitude }) => (
        <div className={classes.row} key={`${name}-${id}`} role="listitem">
          <div className={classes.nameWrapper}>
            <Typography>{name}</Typography>
          </div>
          <Typography>{latitude}</Typography>
          <Typography>{longitude}</Typography>
          <Typography>{altitude}</Typography>
          <DeleteAction action={handleDeleteStation(id)(dispatch)} />
        </div>
      ))}
    </div>
  );
};

StationsList.propTypes = {
  stations: PropTypes.array,
};

export default StationsList;

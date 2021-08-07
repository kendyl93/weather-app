import React from "react";
import Grid from "@material-ui/core/Grid";
import CurrentWeather from "./CurrentWeather";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  currentWeatherContainer: {
    minHeight: "600px",
    background: "white",
    borderRadius: "32px",
    padding: "16px",
    marginTop: "8px",

    [theme.breakpoints.up("md")]: {
      padding: "32px",
      marginTop: "32px",
    },
  },
  mapContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
}));
const Weather = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={2}
      classes={{ root: classes.currentWeatherContainer }}
    >
      <Grid item md={6} xs={12}>
        <CurrentWeather />
      </Grid>
    </Grid>
  );
};

export default Weather;

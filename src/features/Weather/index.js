import React from "react"
import Grid from "@material-ui/core/Grid"
import CurrentWeather from "./CurrentWeather"
import { useSelector } from "react-redux"
import LocationMap from "./CurrentWeather/Map/LocationMap"
import {
  selectCurrentCity,
  selectImageBase64Code,
} from "../../store/currentWeather/selectors"
import { makeStyles } from "@material-ui/styles"
import { MAP_ZOOM } from "../../constants"

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
}))
const Weather = () => {
  const classes = useStyles()
  const currentCity = useSelector(selectCurrentCity)
  const imageBase64Code = useSelector(selectImageBase64Code)

  return (
    <Grid container spacing={2} classes={{ root: classes.currentWeatherContainer }}>
      <Grid item md={6} xs={12}>
        <CurrentWeather />
      </Grid>
      <Grid item md={6} classes={{ root: classes.mapContainer }}>
        <LocationMap
          imageBase64Code={imageBase64Code}
          lat={currentCity?.coord?.lat}
          lon={currentCity?.coord?.lon}
          zoom={MAP_ZOOM}
        />
      </Grid>
    </Grid>
  )
}

export default Weather

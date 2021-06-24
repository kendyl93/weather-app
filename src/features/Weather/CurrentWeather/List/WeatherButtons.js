import React from "react"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import Button from "@material-ui/core/Button"
import Grid from "@material-ui/core/Grid"
import clsx from "clsx"
import { makeStyles } from "@material-ui/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  ButtonGroup: {
    width: "100%",
    marginBottom: "16px",
  },
  button: {
    width: "100%",
    fontSize: "12px",
    backgroundColor: "#ccc",

    "&:hover": {
      backgroundColor: "#4098EF",
    },

    [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
    },
  },
  active: {
    backgroundColor: "#4098EF !important",
  },
}))

const WeatherButtons = ({ disableButtons, setShowForecast, showForecast }) => {
  const classes = useStyles()

  return (
    <Grid container item xs={12}>
      <ButtonGroup
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        className={classes.ButtonGroup}
      >
        <Button
          onClick={() => setShowForecast(false)}
          disabled={disableButtons}
          className={clsx(classes.button, {
            [classes.active]: !showForecast && !disableButtons,
          })}
        >
          Current Weather
        </Button>
        <Button
          onClick={() => setShowForecast(true)}
          disabled={disableButtons}
          className={clsx(classes.button, {
            [classes.active]: showForecast && !disableButtons,
          })}
        >
          5 day Forecast
        </Button>
      </ButtonGroup>
    </Grid>
  )
}

WeatherButtons.propTypes = {
  disableButtons: PropTypes.bool,
  setShowForecast: PropTypes.func,
  showForecast: PropTypes.bool,
}

export default WeatherButtons

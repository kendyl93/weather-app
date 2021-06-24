import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import { celcius } from "../../../utils/string"
import { formatDate } from "../../../utils/date"
import Typography from "@material-ui/core/Typography"

const useStyles = makeStyles((theme) => ({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 50px 50px 50px",
    alignItems: "center",
    textAlign: "center",
  },
  iconWrapper: {
    margin: "0 auto",
  },
}))

const Row = ({ weather, dateTime, timezoneOffset, min, max }) => {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Typography>{formatDate(dateTime, timezoneOffset)}</Typography>
      <Typography>{weather?.description}</Typography>
      <div className={classes.iconWrapper}>
        <img
          src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
          alt="weather-icon"
        />
      </div>
      <Typography>{celcius(min)}</Typography>
      <Typography>{celcius(max)}</Typography>
    </div>
  )
}

Row.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  weather: PropTypes.object.isRequired,
  dateTime: PropTypes.number.isRequired,
  timezoneOffset: PropTypes.number,
}

export default Row

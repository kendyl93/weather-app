import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/styles"
import TableHeader from "./TableHeader"
import Row from "./Row"

const useStyles = makeStyles((theme) => ({
  containerWrapper: {
    "& > div": {
      height: "54px",

      "&:nth-child(odd)": {
        background: "#CCC",
      },
    },
  },
}))

const Forecast = ({ forecast = [], timezoneOffset = 0, showForecast = false }) => {
  const classes = useStyles()
  const slicedForecast = showForecast ? forecast.slice(0, 5) : forecast.slice(0, 1)

  if (slicedForecast?.length === 0) {
    return <div data-testid="no-forecast"></div>
  }

  return (
    <div className={classes.containerWrapper} data-testid="forecast">
      <TableHeader />
      {slicedForecast?.map(
        ({ temp: { min, max } = {}, weather = [], dt: dateTime } = {}, index) => (
          <div role="listitem" key={`daily-forecast-${weather[0]?.id}-${index}`}>
            <Row
              min={min}
              max={max}
              weather={weather[0]}
              dateTime={dateTime}
              timezoneOffset={timezoneOffset}
            />
          </div>
        )
      )}
    </div>
  )
}

Forecast.propTypes = {
  forecast: PropTypes.array,
  timezoneOffset: PropTypes.number,
  showForecast: PropTypes.bool,
}

export default Forecast

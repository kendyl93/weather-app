import React, { useState } from "react"
import { useSelector } from "react-redux"
import {
  selectCurrentCity,
  selectCurrentWeatherLoading,
  selectforecat,
} from "../../../store/currentWeather/selectors"
import Forecast from "../Forecast"
import SearchInput from "./Form/SearchInput"
import Header from "./List/Header"
import WeatherButtons from "./List/WeatherButtons"
import Loading from "../../../components/Loading"

const CurrentWeather = () => {
  const currentCity = useSelector(selectCurrentCity)
  const loading = useSelector(selectCurrentWeatherLoading)
  const forecast = useSelector(selectforecat)

  const [showForecast, setShowForecast] = useState(false)

  return (
    <>
      <SearchInput />
      <Header cityName={currentCity?.name} />
      <WeatherButtons
        setShowForecast={setShowForecast}
        disableButtons={!currentCity?.name}
        showForecast={showForecast}
      />

      {loading ? (
        <Loading size="LG" />
      ) : (
        <Forecast
          forecast={forecast}
          timezoneOffset={currentCity.timezone}
          showForecast={showForecast}
        />
      )}
    </>
  )
}

export default CurrentWeather

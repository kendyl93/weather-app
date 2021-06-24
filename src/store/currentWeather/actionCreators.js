import { longitude2tile, latitude2tile } from "../../utils/math"
import {
  currentWeatherEndpoint,
  currentLocationMap,
  forecastEndpoint,
} from "./endpoints"

import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
  FETCH_LOCATION_IMAGE_SUCCESS,
  FETCH_FORECAST_SUCCESS,
} from "./actionTypes"
import withLoading from "../utils"

export const fetchCityDataSuccess = (data) => ({
  type: FETCH_CURRENT_CITY_DATA_SUCCESS,
  payload: data,
})

export const fetchLocationImageSuccess = (data) => ({
  type: FETCH_LOCATION_IMAGE_SUCCESS,
  payload: data,
})

export const fetchForecastSuccess = (data) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: data,
})

export const currentWeatherError = (error) => ({
  type: CURRENT_WEATHER_ERROR,
  payload: error,
})

export const fetchCurrentWeatherWithLoading = (cityName) => async (dispatch) => {
  const fetchCurrentWeather = (cityName) => async () => {
    try {
      const response = await currentWeatherEndpoint(cityName)
      const { data } = response || {}
      const { coord: { lon, lat } = {} } = data

      fetchLocationMap(lon, lat)(dispatch)
      fetchForecast(lon, lat)(dispatch)
      dispatch(fetchCityDataSuccess(data))
    } catch (error) {
      dispatch(currentWeatherError(error.toString()))
    }
  }

  withLoading(dispatch, fetchCurrentWeather(cityName))
}

export const fetchLocationMap = (lon, lat) => async (dispatch) => {
  try {
    const response = await currentLocationMap(
      longitude2tile(lon),
      latitude2tile(lat)
    )
    const { data } = response || {}

    dispatch(fetchLocationImageSuccess(data))
  } catch (error) {
    currentWeatherError(error.toString())
  }
}

export const fetchForecast = (lat, lon) => async (dispatch) => {
  try {
    const response = await forecastEndpoint(lat, lon)

    dispatch(fetchForecastSuccess(response?.data))
  } catch (error) {
    currentWeatherError(error.toString())
  }
}

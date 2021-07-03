import { currentWeatherEndpoint, forecastEndpoint } from "./endpoints";

import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
  FETCH_FORECAST_SUCCESS,
} from "./actionTypes";
import withLoading from "../utils";

export const fetchCityDataSuccess = (data) => ({
  type: FETCH_CURRENT_CITY_DATA_SUCCESS,
  payload: data,
});

export const fetchForecastSuccess = (data) => ({
  type: FETCH_FORECAST_SUCCESS,
  payload: data,
});

export const currentWeatherError = (error) => ({
  type: CURRENT_WEATHER_ERROR,
  payload: error,
});

export const fetchCurrentWeatherWithLoading =
  (cityName) => async (dispatch) => {
    const fetchCurrentWeather = (cityName) => async () => {
      try {
        const response = await currentWeatherEndpoint(cityName);
        const { data } = response || {};
        const { coord: { lon, lat } = {} } = data;

        fetchForecast(lon, lat)(dispatch);
        dispatch(fetchCityDataSuccess(data));
      } catch (error) {
        dispatch(currentWeatherError(error.toString()));
      }
    };

    withLoading(dispatch, fetchCurrentWeather(cityName));
  };

export const fetchForecast = (lat, lon) => async (dispatch) => {
  try {
    const response = await forecastEndpoint(lat, lon);

    dispatch(fetchForecastSuccess(response?.data));
  } catch (error) {
    currentWeatherError(error.toString());
  }
};

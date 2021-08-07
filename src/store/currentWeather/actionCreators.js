import { currentWeatherEndpoint } from "./endpoints";

import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
} from "./actionTypes";

export const fetchCityDataSuccess = (data) => ({
  type: FETCH_CURRENT_CITY_DATA_SUCCESS,
  payload: data,
});

export const currentWeatherError = (error) => ({
  type: CURRENT_WEATHER_ERROR,
  payload: error,
});

export const fetchCurrentWeather = (cityName) => async (dispatch) => {
  try {
    const response = await currentWeatherEndpoint(cityName);
    const { data } = response || {};
    console.log({ data });

    dispatch(fetchCityDataSuccess(data));
  } catch (error) {
    dispatch(currentWeatherError(error.toString()));
  }
};

import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
  FETCH_FORECAST_SUCCESS,
} from "./actionTypes";
import { LOADING_FINISHED, LOADING_STARTED } from "../utils";

export const initialState = {
  city: {
    main: { temp_min: null, temp_max: null },
    weather: [],
    name: "",
    coord: { lon: null, lat: null },
  },
  forecast: [],
  error: null,
  loading: false,
};

export const weather = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_CITY_DATA_SUCCESS: {
      return {
        ...state,
        error: null,
        city: action.payload,
      };
    }
    case CURRENT_WEATHER_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case LOADING_STARTED: {
      return {
        ...state,
        loading: true,
      };
    }
    case LOADING_FINISHED: {
      return {
        ...state,
        loading: false,
      };
    }
    case FETCH_FORECAST_SUCCESS: {
      return {
        ...state,
        error: null,
        forecast: action.payload.daily,
      };
    }
    default: {
      return state;
    }
  }
};

export default weather;

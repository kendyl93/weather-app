import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
} from "./actionTypes";

export const initialState = {
  city: {
    main: { temp_min: null, temp_max: null },
    weather: [],
    name: "",
  },
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
    default: {
      return state;
    }
  }
};

export default weather;

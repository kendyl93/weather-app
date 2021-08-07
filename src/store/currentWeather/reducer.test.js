import { initialState, weather } from "./reducer";
import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
} from "./actionTypes";

describe("weather Reducer", () => {
  it("returns the initial state when an action type is not passed", () => {
    const reducer = weather(undefined, {});

    expect(reducer).toEqual(initialState);
  });

  it(`handles ${FETCH_CURRENT_CITY_DATA_SUCCESS} as expected`, () => {
    const reducer = weather(initialState, {
      type: FETCH_CURRENT_CITY_DATA_SUCCESS,
      payload: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
      },
    });

    expect(reducer).toEqual({
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
      },
      error: null,
    });
  });

  it(`handles ${CURRENT_WEATHER_ERROR} as expected`, () => {
    const state = {
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
      },
      error: null,
    };

    const reducer = weather(state, {
      type: CURRENT_WEATHER_ERROR,
      payload: "error",
    });

    expect(reducer).toEqual({
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
      },
      error: "error",
    });
  });
});

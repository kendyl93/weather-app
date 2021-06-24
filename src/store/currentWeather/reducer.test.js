import { initialState, weather } from "./reducer"
import {
  FETCH_CURRENT_CITY_DATA_SUCCESS,
  CURRENT_WEATHER_ERROR,
  FETCH_LOCATION_IMAGE_SUCCESS,
  FETCH_FORECAST_SUCCESS,
} from "./actionTypes"
import { LOADING_STARTED, LOADING_FINISHED } from "../utils"

describe("weather Reducer", () => {
  it("returns the initial state when an action type is not passed", () => {
    const reducer = weather(undefined, {})

    expect(reducer).toEqual(initialState)
  })

  it(`handles ${FETCH_CURRENT_CITY_DATA_SUCCESS} as expected`, () => {
    const reducer = weather(initialState, {
      type: FETCH_CURRENT_CITY_DATA_SUCCESS,
      payload: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
    })

    expect(reducer).toEqual({
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: [],
      locationImage: "",
      error: null,
      loading: false,
    })
  })

  it(`handles ${CURRENT_WEATHER_ERROR} as expected`, () => {
    const state = {
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: [],
      locationImage: "",
      error: null,
      loading: false,
    }

    const reducer = weather(state, {
      type: CURRENT_WEATHER_ERROR,
      payload: "error",
    })

    expect(reducer).toEqual({
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: [],
      locationImage: "",
      error: "error",
      loading: false,
    })
  })

  it(`handles ${FETCH_LOCATION_IMAGE_SUCCESS} as expected`, () => {
    const state = {
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: [],
      locationImage: "",
      error: "error",
      loading: false,
    }

    const reducer = weather(state, {
      type: FETCH_LOCATION_IMAGE_SUCCESS,
      payload: "blobImageResponse",
    })

    expect(reducer).toEqual({
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: [],
      locationImage: "blobImageResponse",
      error: null,
      loading: false,
    })
  })

  it(`handles ${FETCH_FORECAST_SUCCESS} as expected`, () => {
    const state = {
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: [],
      locationImage: "",
      error: "error",
      loading: false,
    }

    const reducer = weather(state, {
      type: FETCH_FORECAST_SUCCESS,
      payload: { daily: ["forecast", "data"] },
    })

    expect(reducer).toEqual({
      city: {
        main: { temp_min: 5, temp_max: 8 },
        weather: ["someData"],
        name: "CityName",
        coord: { lon: 22, lat: 22 },
      },
      forecast: ["forecast", "data"],
      locationImage: "",
      error: null,
      loading: false,
    })
  })

  it(`handles ${LOADING_STARTED} as expected`, () => {
    const reducer = weather(initialState, {
      type: LOADING_STARTED,
    })

    expect(reducer).toEqual({
      city: {
        main: { temp_min: null, temp_max: null },
        weather: [],
        name: "",
        coord: { lon: null, lat: null },
      },
      forecast: [],
      locationImage: "",
      error: null,
      loading: true,
    })
  })

  it(`handles ${LOADING_FINISHED} as expected`, () => {
    const reducer = weather(initialState, {
      type: LOADING_FINISHED,
    })

    expect(reducer).toEqual(initialState)
  })
})

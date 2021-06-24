import { initialState, weatherStations } from "./reducer"
import {
  FETCH_STATIONS_SUCCESS,
  ADD_STATION_SUCCESS,
  DELETE_STATION_SUCCESS,
  STATION_ERROR,
} from "./actionTypes"
import { LOADING_STARTED, LOADING_FINISHED } from "../utils"

describe("weatherStations Reducer", () => {
  it("returns the initial state when an action type is not passed", () => {
    const reducer = weatherStations(undefined, {})

    expect(reducer).toEqual(initialState)
  })

  it(`handles ${FETCH_STATIONS_SUCCESS} as expected`, () => {
    const reducer = weatherStations(initialState, {
      type: FETCH_STATIONS_SUCCESS,
      payload: [{ station: 1 }, { station: 2 }],
    })

    expect(reducer).toEqual({
      stations: [{ station: 1 }, { station: 2 }],
      loading: false,
      error: false,
    })
  })

  it(`handles ${ADD_STATION_SUCCESS} as expected`, () => {
    const state = {
      stations: [{ station: 1 }, { station: 2 }],
      loading: false,
      error: false,
    }

    const reducer = weatherStations(state, {
      type: ADD_STATION_SUCCESS,
      payload: { station: 3 },
    })

    expect(reducer).toEqual({
      stations: [{ station: 1 }, { station: 2 }, { station: 3 }],
      loading: false,
      error: false,
    })
  })

  it(`handles ${DELETE_STATION_SUCCESS} as expected`, () => {
    const state = {
      stations: [{ id: 1 }, { id: 2 }],
      loading: false,
      error: false,
    }

    const reducer = weatherStations(state, {
      type: DELETE_STATION_SUCCESS,
      payload: 1,
    })

    expect(reducer).toEqual({
      stations: [{ id: 2 }],
      loading: false,
      error: false,
    })
  })

  it(`handles ${STATION_ERROR} as expected`, () => {
    const reducer = weatherStations(initialState, {
      type: STATION_ERROR,
      payload: "Error",
    })

    expect(reducer).toEqual({
      stations: [],
      loading: false,
      error: "Error",
    })
  })

  it(`handles ${LOADING_STARTED} as expected`, () => {
    const reducer = weatherStations(initialState, {
      type: LOADING_STARTED,
    })

    expect(reducer).toEqual({
      stations: [],
      error: null,
      loading: true,
    })
  })

  it(`handles ${LOADING_FINISHED} as expected`, () => {
    const reducer = weatherStations(initialState, {
      type: LOADING_FINISHED,
    })

    expect(reducer).toEqual(initialState)
  })
})

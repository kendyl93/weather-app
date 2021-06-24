import {
  ADD_STATION_SUCCESS,
  DELETE_STATION_SUCCESS,
  FETCH_STATIONS_SUCCESS,
  STATION_ERROR,
} from "./actionTypes"
import { LOADING_FINISHED, LOADING_STARTED } from "../utils"

export const initialState = {
  stations: [],
  error: null,
  loading: false,
}

export const weatherStations = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STATIONS_SUCCESS: {
      return {
        ...state,
        stations: action.payload,
        error: false,
      }
    }
    case ADD_STATION_SUCCESS: {
      return {
        ...state,
        error: false,
        stations: [...state.stations, action.payload],
      }
    }
    case DELETE_STATION_SUCCESS: {
      return {
        ...state,
        error: false,
        stations: state.stations.filter(({ id }) => id !== action.payload),
      }
    }
    case STATION_ERROR: {
      return {
        ...state,
        error: action.payload,
      }
    }
    case LOADING_STARTED: {
      return {
        ...state,
        loading: true,
      }
    }
    case LOADING_FINISHED: {
      return {
        ...state,
        loading: false,
      }
    }
    default: {
      return state
    }
  }
}

export default weatherStations

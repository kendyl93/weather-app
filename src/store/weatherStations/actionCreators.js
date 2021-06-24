import {
  ADD_STATION_SUCCESS,
  DELETE_STATION_SUCCESS,
  FETCH_STATIONS_SUCCESS,
  STATION_ERROR,
} from "./actionTypes"
import withLoading from "../utils"
import {
  fetchStationsEndpoint,
  deleteStationEndpoint,
  addStationEndpoint,
} from "./endpoints"

export const addStationSuccess = (station) => ({
  type: ADD_STATION_SUCCESS,
  payload: station,
})

export const stationError = (error) => ({
  type: STATION_ERROR,
  payload: error,
})

export const fetchStationsSuccess = (stations) => ({
  type: FETCH_STATIONS_SUCCESS,
  payload: stations,
})

export const fetchStationsWithLoading = async (dispatch) => {
  const fetchStations = async () => {
    try {
      const response = await fetchStationsEndpoint()
      dispatch(fetchStationsSuccess(response?.data))
    } catch (error) {
      dispatch(stationError(error.toString()))
    }
  }

  withLoading(dispatch, fetchStations)
}

export const deleteStationSuccess = (id) => ({
  type: DELETE_STATION_SUCCESS,
  payload: id,
})

export const removeStationWithLoading = (id) => async (dispatch) => {
  const removeStation = (id) => async () => {
    try {
      const response = await deleteStationEndpoint(id)
      console.warn({ response })
      dispatch(deleteStationSuccess(id))
    } catch (error) {
      dispatch(stationError(error.toString()))
    }
  }

  withLoading(dispatch, removeStation(id))
}

export const addStationWithLoading = (inputs) => async (dispatch) => {
  const addStation = (inputs) => async () => {
    try {
      const withExternalId = {
        ...inputs,
        altitude: Number(inputs.altitude),
        longitude: Number(inputs.longitude),
        latitude: Number(inputs.latitude),
        external_id: inputs.name.replace(/ /g, ""),
      }
      const response = await addStationEndpoint(withExternalId)
      dispatch(addStationSuccess(response?.data))
    } catch (error) {
      console.warn({ error })
      dispatch(stationError(error.toString()))
    }
  }

  withLoading(dispatch, addStation(inputs))
}

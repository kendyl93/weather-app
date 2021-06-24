import { combineReducers } from "redux"
import weatherStations from "./weatherStations/reducer"
import currentWeather from "./currentWeather/reducer"

const rootReducer = combineReducers({
  weatherStations,
  currentWeather,
})

export default rootReducer

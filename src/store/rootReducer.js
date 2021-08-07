import { combineReducers } from "redux";
import currentWeather from "./currentWeather/reducer";

const rootReducer = combineReducers({
  currentWeather,
});

export default rootReducer;

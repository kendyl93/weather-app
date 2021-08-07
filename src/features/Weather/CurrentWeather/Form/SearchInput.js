import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import EndAdornment from "./EndAdornment";
import { fetchCurrentWeather } from "../../../../store/currentWeather/actionCreators";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "100%",
    marginBottom: "16px",
  },
}));

const onFormSubmit = (cityName, dispatch) => async (event) => {
  event.preventDefault();

  fetchCurrentWeather(cityName)(dispatch);
};

const onInputChange = (set) => (event) => {
  event.preventDefault();
  const {
    target: { value = "" },
  } = event || {};

  set(value);
};

const SearchInput = () => {
  const classes = useStyles();
  const [cityName, setCityName] = useState("");
  const dispatch = useDispatch();
  const onCityNameInputChange = onInputChange(setCityName);

  return (
    <form onSubmit={onFormSubmit(cityName, dispatch)}>
      <TextField
        className={classes.searchInput}
        onChange={onCityNameInputChange}
        label="search for city"
        InputProps={{
          endAdornment: <EndAdornment role="button" />,
        }}
      />
    </form>
  );
};

export default SearchInput;

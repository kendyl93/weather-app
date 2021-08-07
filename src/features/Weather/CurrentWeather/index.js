import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentCity } from "../../../store/currentWeather/selectors";
import SearchInput from "./Form/SearchInput";
import Header from "./List/Header";

const CurrentWeather = () => {
  const currentCity = useSelector(selectCurrentCity);

  return (
    <>
      <SearchInput />
      <Header cityName={currentCity?.name} />
    </>
  );
};

export default CurrentWeather;

import axios from "axios";

export const addStationEndpoint = async (station) =>
  await axios.post(
    "http://api.openweathermap.org/data/3.0/stations?appid=71fb96228421b4944f1b51e799b1e87e",
    station
  );

export const deleteStationEndpoint = async (id) =>
  await axios.delete(
    `http://api.openweathermap.org/data/3.0/stations?appid=71fb96228421b4944f1b51e799b1e87e/${id}`
  );

export const fetchStationsEndpoint = async () =>
  await axios.get(
    "https://api.openweathermap.org/data/3.0/stations?appid=71fb96228421b4944f1b51e799b1e87e"
  );

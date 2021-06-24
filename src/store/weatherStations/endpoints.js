import axios from "axios"

export const addStationEndpoint = async (station) =>
  await axios.post("http://localhost:4000/api/stations", station)

export const deleteStationEndpoint = async (id) =>
  await axios.delete(`http://localhost:4000/api/stations/${id}`)

export const fetchStationsEndpoint = async () =>
  await axios.get(
    "http://api.openweathermap.org/data/3.0/stations?appid=d205e1b1959769a0b07b981d2c123252"
  )

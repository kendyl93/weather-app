import dataApi from "../../api/data";

export const currentWeatherEndpoint = async (cityName) =>
  await dataApi.get(`/weather?q=${cityName}`);

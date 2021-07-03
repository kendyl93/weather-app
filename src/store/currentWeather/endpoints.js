import dataApi from "../../api/data";

export const currentWeatherEndpoint = async (cityName) =>
  await dataApi.get(`/weather?q=${cityName}`);

export const forecastEndpoint = async (lat, lon) =>
  dataApi.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely`);

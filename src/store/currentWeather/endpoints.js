import dataApi from "../../api/data"
import mapApi from "../../api/map"
import { MAP_ZOOM } from "../../constants"

export const currentWeatherEndpoint = async (cityName) =>
  await dataApi.get(`/weather?q=${cityName}`)
export const currentLocationMap = async (y, x, z = MAP_ZOOM, layer = "clouds_new") =>
  await mapApi.get(`${layer}/${z}/${x}/${y}.png`)

export const forecastEndpoint = async (lat, lon) =>
  dataApi.get(`/onecall?lat=${lat}&lon=${lon}&exclude=hourly,minutely`)

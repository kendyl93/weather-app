import { MAP_ZOOM } from "../constants"

export const longitude2tile = (lon) => {
  if (typeof lon !== "number") {
    return 0
  }

  return Math.floor(((lon + 180) / 360) * Math.pow(2, MAP_ZOOM))
}

export const latitude2tile = (lat) => {
  if (typeof lat !== "number") {
    return 0
  }

  return Math.floor(
    ((1 -
      Math.log(
        Math.tan((lat * Math.PI) / 180) + 1 / Math.cos((lat * Math.PI) / 180)
      ) /
        Math.PI) /
      2) *
      Math.pow(2, MAP_ZOOM)
  )
}

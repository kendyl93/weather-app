const inLatitudeRange = (value) => value >= -90 && value <= 90
export const asLatitude = (value) => {
  const numValue = Number(value)

  if (inLatitudeRange(numValue)) {
    return false
  }

  return true
}

const inLongitudeRange = (value) => value >= -180 && value <= 180
export const asLongitude = (value) => {
  const numValue = Number(value)

  if (inLongitudeRange(numValue)) {
    return false
  }

  return true
}

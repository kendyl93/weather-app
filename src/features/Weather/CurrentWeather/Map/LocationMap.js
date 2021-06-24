import React from "react"
import PropTypes from "prop-types"
import GoogleMapReact from "google-map-react"
import ENV from "../../../../env"
import { OSLO_COORDS } from "../../../../constants"

const LocationMap = ({ imageBase64Code, zoom, lat, lon }) => {
  return (
    <div style={{ height: "256px", width: "256px" }}>
      {imageBase64Code && (
        <img
          style={{ position: "absolute", zIndex: 1 }}
          src={URL.createObjectURL(imageBase64Code)}
          alt="map-weather-layer"
        />
      )}
      <GoogleMapReact
        bootstrapURLKeys={{ key: ENV.GOOGLE_MAP_API_KEY }}
        center={{ lat: lat || OSLO_COORDS.lat, lng: lon || OSLO_COORDS.lon }}
        defaultZoom={zoom}
      />
    </div>
  )
}

LocationMap.propTypes = {
  imageBase64Code: PropTypes.string,
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lon: PropTypes.number,
}

export default LocationMap

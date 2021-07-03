import React from "react";
import PropTypes from "prop-types";
import GoogleMapReact from "google-map-react";
import ENV from "../../../../env";
import { OSLO_COORDS } from "../../../../constants";

const LocationMap = ({ zoom, lat, lon }) => {
  return (
    <div style={{ height: "512px", width: "512px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: ENV.REACT_APP_GOOGLE_MAP_API_KEY }}
        center={{ lat: lat || OSLO_COORDS.lat, lng: lon || OSLO_COORDS.lon }}
        defaultZoom={zoom}
      />
    </div>
  );
};

LocationMap.propTypes = {
  zoom: PropTypes.number.isRequired,
  lat: PropTypes.number,
  lon: PropTypes.number,
};

export default LocationMap;

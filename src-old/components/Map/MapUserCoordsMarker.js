import React from 'react';

import { Marker, Popup } from 'react-leaflet';

const MapUserCoordsMarker = (props) => {
  return (
    <Marker position={{ lat: props.userLat, lng: props.userLng }}>
      <Popup>
        裝置定位在
        <br />
        {`${props.userLat.toFixed(2)}, ${props.userLng.toFixed(2)}`}
      </Popup>
    </Marker>
  );
};

export default MapUserCoordsMarker;

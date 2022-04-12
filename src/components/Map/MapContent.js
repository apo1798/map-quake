import React from 'react';
import { useSelector } from 'react-redux';

import { MapContainer, TileLayer } from 'react-leaflet';

import MapEarthquakeMarkers from './MapEarthquakeMarkers';
import MapUserCoordsMarker from './MapUserCoordsMarker';
import MapCenter from './MapCenter';

const MapContent = (props) => {
  const earthquakeArray = useSelector((state) => state.app.earthquakeArray);
  const coordsLat = useSelector((state) => state.coords.lat);
  const coordsLng = useSelector((state) => state.coords.lng);

  return (
    <MapContainer
      worldCopyJump={true}
      placeholder={<p>World map marked with earthquake popup.</p>}
      tap={false}
      // tap to fix popup cann't be shown in Safari
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <MapUserCoordsMarker userLat={props.userLat} userLng={props.userLng} />
      <MapEarthquakeMarkers earthquakeArray={earthquakeArray} />
      <MapCenter center={{ lat: coordsLat, lng: coordsLng }} />
    </MapContainer>
  );
};

export default MapContent;

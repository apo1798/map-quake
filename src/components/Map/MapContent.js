import React, { useContext } from 'react';
import { DataContext } from '../../store/DataContext';

import { MapContainer, TileLayer } from 'react-leaflet';

// import SetBoundsRectangles from './SetBoundsRectangles';
import MapEarthquakeMarkers from './MapEarthquakeMarkers';
import MapUserCoordsMarker from './MapUserCoordsMarker';
import MapCenter from './MapCenter';

// const position = [51.505, -0.09];
// const bounds = [
//   [51.49, -0.08],
//   [51.5, -0.06],
// ];

const MapContent = (props) => {
  const { earthquakeArray, coordsLat, coordsLng } = useContext(DataContext);

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

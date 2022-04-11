import { useMap, Popup, Marker } from 'react-leaflet';

const L = require('leaflet');

const myIcon = L.icon({
  iconUrl: require('../../icons/person-simple-walk.png'),
  iconSize: [35, 35],
  iconAnchor: [17.5, 17.5],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
});

// To center the map whenever the input coords value is changed
const MapCenter = ({ center, zoom = 6 }) => {
  const map = useMap();
  map.setView(center, zoom);

  // return null;
  return (
    <Marker position={{ lat: center.lat, lng: center.lng }} icon={myIcon}>
      <Popup>
        你現在移動到
        <br />
        {`${(+center.lat).toFixed(2)}, ${(+center.lng).toFixed(2)}`}
      </Popup>
    </Marker>
  );
};

export default MapCenter;

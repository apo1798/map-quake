import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../store/DataContext';

import MapLoading from './MapLoading';
import MapContent from './MapContent';

// import styles from './Map.module.css';

const Map = () => {
  const [userLat, setUserLat] = useState('');
  const [userLng, setUserLng] = useState('');
  const { setCoordsLat, setCoordsLng } = useContext(DataContext);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lng = pos.coords.longitude.toFixed(4);
          setUserLat(+lat);
          setUserLng(+lng);
          setCoordsLat(+lat);
          setCoordsLng(+lng);
        },
        () => {
          alert("系統自動定位在(25°N, 121°50'E)");
          setUserLat(25);
          setUserLng(121.5);
          setCoordsLat(25);
          setCoordsLng(121.5);
        }
      );
    }
  }, [setCoordsLat, setCoordsLng]);

  return (
    <>
      {!userLat && !userLng && <MapLoading />}
      {userLat && userLng && <MapContent userLat={userLat} userLng={userLng} />}
    </>
  );
};

export default Map;

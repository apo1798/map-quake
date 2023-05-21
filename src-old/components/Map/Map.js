import React, { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { coordsActions } from '../../store/coords-slice';

import MapLoading from './MapLoading';
import MapContent from './MapContent';

const Map = () => {
  const [userLat, setUserLat] = useState('');
  const [userLng, setUserLng] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const lat = pos.coords.latitude.toFixed(4);
          const lng = pos.coords.longitude.toFixed(4);
          setUserLat(+lat);
          setUserLng(+lng);
          dispatch(coordsActions.changeLat(+lat));
          dispatch(coordsActions.changeLng(+lng));
        },
        () => {
          alert("系統自動定位在(25°N, 121°50'E)");
          setUserLat(25);
          setUserLng(121.5);
          dispatch(coordsActions.changeLat(25));
          dispatch(coordsActions.changeLng(121.5));
        }
      );
    }
  }, [dispatch]);

  return (
    <>
      {!userLat && !userLng && <MapLoading />}
      {userLat && userLng && <MapContent userLat={userLat} userLng={userLng} />}
    </>
  );
};

export default Map;

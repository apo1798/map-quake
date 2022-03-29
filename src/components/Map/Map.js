import React, { useContext, useEffect } from 'react';
import { DataContext } from '../../store/DataContext';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import styles from './Map.module.css'
import CircleNotch from '../../UI/CircleNotch';


const Map = () => {
  const { lat, setLat, lng, setLng } = useContext(DataContext);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLat(latitude);
        setLng(longitude);
      },
      () => {
        alert("系統自動定位在(25°N, 121°50'E)");
        setLat(25);
        setLng(121.5);
      }
    );
  }, [setLat, setLng]);

  return (
    <>
      {!lat && !lng && (
        <>
          <CircleNotch />
          <p className={styles['loading-text']}>地圖載入中......</p>
        </>
      )}
      {lat && lng && (
        <MapContainer center={{ lat: lat, lng: lng }} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
          />
          <Marker position={{ lat: lat, lng: lng }}>
            <Popup>你現在的位置</Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  );
};

export default Map;

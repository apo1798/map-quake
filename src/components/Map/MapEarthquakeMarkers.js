import React from 'react';

import { CircleMarker, Tooltip } from 'react-leaflet';

const markerOutlineMatcher = (mag) => {
  if (mag < 4) return '#0f2';
  else if (mag < 5) return '#0b0';
  else if (mag < 6) return '#fc0';
  else if (mag < 7) return '#f90';
  else return '#f00';
};

const markerRadiusMatcher = (mag) => {
  if (mag < 4) return '2';
  else if (mag < 5) return '5';
  else if (mag < 6) return '7';
  else if (mag < 7) return '15';
  else return '20';
};

const markerOpacityMatcher = (mag) => {
  if (mag < 4) return 0.1;
  else if (mag < 5) return 0.15;
  else if (mag < 6) return 0.25;
  else if (mag < 7) return 0.5;
  else return 0.7;
};

const markerWeightMatcher = (mag) => {
  if (mag < 4) return 0.5;
  else if (mag < 5) return 1.4;
  else if (mag < 6) return 1.8;
  else if (mag < 7) return 3;
  else return 4;
};

const markerZIndexMatcher = (mag) => {
  if (mag < 4) return 10;
  else if (mag < 5) return 11;
  else if (mag < 6) return 12;
  else if (mag < 7) return 13;
  else return 14;
};

const MapEarthquakeMarkers = (props) => {
  console.log(props.earthquakeArray);
  return (
    <>
      {props.earthquakeArray.map((data) => {
        return (
          <CircleMarker
            center={{ lat: data.lat, lng: data.lng }}
            key={data.id}
            pathOptions={{ fillColor: markerOutlineMatcher(data.mag) }}
            radius={markerRadiusMatcher(data.mag)}
            color={markerOutlineMatcher(data.mag)}
            fillOpacity={markerOpacityMatcher(data.mag)}
            weight={markerWeightMatcher(data.mag)}
            zIndex={markerZIndexMatcher(data.mag)}
          >
            {/* <Marker
              position={{ lat: data.lat, lng: data.lng }}
              onMouseOver={(e) => {
                e.target.openPopup();
              }}
              onMouseOut={(e) => {
                e.target.closePopup();
              }}
            > */}
            <Tooltip
              sticky={true}
              interactive={true}
              onClick={() => {
                console.log('hi');
              }}
              // permanent={true}
            >
              深度：{data.depth}公里／震度：{data.mag}級
              <br /> 地點：{data.place}
              <br /> 座標：{`${data.lat}, ${data.lng}`}
              <br /> 時間：{data.time.split('.')[0]}
            </Tooltip>
            {/* </Marker> */}
          </CircleMarker>

          // <Marker position={{ lat: data.lat, lng: data.lng }} key={data.id}>
          //   <Popup>
          //     深度：{data.depth}公里
          //     <br /> 震度：{data.mag}級
          //     <br /> 地點：{data.place}
          //     <br /> 時間：{data.time.split('.')[0]}
          //   </Popup>
          // </Marker>
        );
      })}
    </>
  );
};

export default MapEarthquakeMarkers;

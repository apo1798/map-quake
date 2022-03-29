import React, { useContext, useEffect } from 'react';
import { DataContext } from '../store/DataContext';

const EarthquakeHttp = () => {
  const { fromDate, toDate } = useContext(DataContext);

  // useEffect(() => {
  //   fetch(
  //     `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${fromDate}&endtime=${toDate}`
  //   )
  //     .then((response) => {
  //       if (!response.ok)
  //         throw new Error('Failed to connect to the data base......');
  //       return response.json();
  //     })
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.error(error.message);
  //     });
  // }, [fromDate, toDate]);

  return <></>;
};

export default EarthquakeHttp;
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-03-23&endtime=2022-03-23

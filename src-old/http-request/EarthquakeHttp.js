import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { appActions } from '../store/app-slice';

const featureProcessor = (feature) => {
  return {
    lng: feature.geometry.coordinates[0],
    lat: feature.geometry.coordinates[1],
    depth: feature.geometry.coordinates[2],
    id: feature.id,
    time: new Date(feature.properties.time).toISOString().split('T').join(' '),
    mag: feature.properties.mag,
    felt: feature.properties.felt,
    place:
      typeof feature.properties.place !== 'string'
        ? '未知'
        : feature.properties.place.includes(',')
        ? feature.properties.place.split(',')[1].trim()
        : feature.properties.place?.charAt(0).toUpperCase() +
          feature.properties.place?.slice(1),
    url: feature.properties.url,
  };
};

export const EarthquakeHttp = () => {
  const fromDate = useSelector((state) => state.date.fromDate);
  const toDate = useSelector((state) => state.date.toDate);
  const mag = useSelector((state) => state.mag.magnitude);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(appActions.changeHttpError(null));
    dispatch(appActions.changeIsLoading(true));

    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${fromDate}&endtime=${toDate}&minmagnitude=${mag}`
    )
      .then((response) => {
        if (!response.ok)
          throw new Error('Failed to connect to the data base...');

        return response.json();
      })
      .then((data) => {
        const earthquakeArray = [...data.features].map((feature) =>
          featureProcessor(feature)
        );
        dispatch(appActions.changeEarthquakeArray(earthquakeArray));
        dispatch(appActions.changeIsLoading(false));
        dispatch(appActions.changeHttpError(null));
      })
      .catch((error) => {
        dispatch(appActions.changeIsLoading(false));
        dispatch(
          appActions.changeHttpError(
            '伺服器回應錯誤。通常是資料數量過多。試著減少時間軸度、亦或增加震度再試一次。'
          )
        );
      });
  }, [fromDate, toDate, mag, dispatch]);
};

// export default EarthquakeHttp;
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-03-01&endtime=2022-03-23

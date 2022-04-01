import { useContext, useEffect } from 'react';
import { DataContext } from '../store/DataContext';

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
  const {
    fromDate,
    toDate,
    setEarthquakeArray,
    mag,
    setIsLoading,
    setHttpError,
  } = useContext(DataContext);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${fromDate}&endtime=${toDate}&minmagnitude=${mag}`
    )
      .then((response) => {
        console.log(response);
        if (!response.ok)
          throw new Error('Failed to connect to the data base...');

        return response.json();
      })
      .then((data) => {
        const earthquakeArray = [...data.features].map((feature) =>
          featureProcessor(feature)
        );
        setEarthquakeArray(earthquakeArray);
        setIsLoading(false);
        setHttpError(null);
      })
      .catch((error) => {
        setIsLoading(false);
        setHttpError(
          '伺服器回應錯誤。通常是資料數量過多。試著減少時間軸度、亦或增加震度再試一次。'
        );
        console.error(error.message);
      });
  }, [fromDate, toDate, setEarthquakeArray, setIsLoading, mag, setHttpError]);
};

// export default EarthquakeHttp;
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-03-01&endtime=2022-03-23

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
  const { fromDate, toDate, setEarthquakeArray, mag, setIsLoading } =
    useContext(DataContext);

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
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error.message);
      });
  }, [fromDate, toDate, setEarthquakeArray, setIsLoading, mag]);
};

// export default EarthquakeHttp;
// https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-03-01&endtime=2022-03-23

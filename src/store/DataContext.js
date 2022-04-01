import React, { useState } from 'react';

// Helper function to get fromDate and toDate
const getDate = (lastMonth = false) => {
  const today = new Date();
  let dateString = `${today.getFullYear()}-${(
    today.getMonth() + (lastMonth ? 0 : 1)
  )
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  try {
    const date = new Date(dateString).toISOString().split('T')[0];
    return date;
  } catch {
    dateString = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-01`;
    const date = new Date(dateString).toISOString().split('T')[0];
    return date;
  }
};

// Create a context
export const DataContext = React.createContext({
  earthquakeArray: [],
  setEarthquakeArray: (dataArray) => {},
  fromDate: 'dateString',
  toDate: 'dateString',
  setToDate: (dateString) => {},
  setFromDate: (dateString) => {},
  coordsLat: 0,
  coordsLng: 0,
  setCoordsLat: () => {},
  setCoordsLng: () => {},
  mag: 0,
  setMag: () => {},
  isLoading: false,
  setIsLoading: (boolean) => {},
  httpError: 'string',
  setHttpError: () => {},
});

const DataContextProvider = (props) => {
  const [fromDate, setFromDate] = useState(getDate(true));
  const [toDate, setToDate] = useState(getDate());
  const [coordsLat, setCoordsLat] = useState(0);
  const [coordsLng, setCoordsLng] = useState(0);
  const [mag, setMag] = useState(3);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  const [earthquakeArray, setEarthquakeArray] = useState([]);

  return (
    <DataContext.Provider
      value={{
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        earthquakeArray,
        setEarthquakeArray,
        coordsLat,
        coordsLng,
        setCoordsLat,
        setCoordsLng,
        mag,
        setMag,
        isLoading,
        setIsLoading,
        httpError,
        setHttpError,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

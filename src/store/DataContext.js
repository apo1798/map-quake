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
  // earthquakeData: [],
  fromDate: 'dateString',
  toDate: 'dateString',
  setToDate: (dateString) => {},
  setFromDate: (dateString) => {},
});

const DataContextProvider = (props) => {
  const [fromDate, setFromDate] = useState(getDate(true));
  const [toDate, setToDate] = useState(getDate());
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');

  return (
    <DataContext.Provider
      value={{
        fromDate,
        setFromDate,
        toDate,
        setToDate,
        lat,
        setLat,
        lng,
        setLng,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;

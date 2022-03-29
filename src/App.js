import React from 'react';
import Layout from './UI/Layout';

import DataContextProvider from './store/DataContext';

import EarthquakeHttp from './http-request/EarthquakeHttp';

const App = () => {
  return (
    <DataContextProvider>
      <Layout />
      <EarthquakeHttp />
    </DataContextProvider>
  );
};

export default App;

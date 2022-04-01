import React from 'react';
import Header from './components/headers/Header';

import DataContextProvider from './store/DataContext';

import MainSection from './UI/MainSection';

const App = () => {
  return (
    <DataContextProvider>
      <Header />
      <MainSection />
    </DataContextProvider>
  );
};

export default App;

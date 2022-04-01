import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Index from './Pages/Index';

import DataContextProvider from './store/DataContext';

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Routes>
          <Route path='/map-quake/' element={<Index />} />
          <Route path='/map-quake/about' element={<About />} />
          <Route path='/map-quake/*' element={<ErrorPage />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import About from './Pages/About';
import ErrorPage from './Pages/ErrorPage';
import Index from './Pages/Index';

const App = () => {
  return (
    <>
      <Helmet>
        <html lang='zh-Hant-TW' />
        <title>MapQuake 地震地圖 | 圖像化世界的地震</title>
        <meta
          name='description'
          content='地震地圖。結合地震API和Leaflet、OpenStreet Map，圖像化全世界的地震，調整日期與震度客製化你想要的地震資料。'
        />
        <meta name='theme-color' content='#4d4d4d' />
        <meta name='keywords' content='地震、地圖、圖像化' />
        <meta property='og:title' content='MapQuake 地震地圖' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/map-quake/og_image.png' />
        <meta
          property='og:url'
          content='https://apo1798.github.io/map-quake/'
        />
      </Helmet>
      {/*  */}
      <BrowserRouter>
        <Routes>
          <Route path='/map-quake/' element={<Index />} />
          <Route path='/map-quake/about' element={<About />} />
          <Route path='/map-quake/*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>{' '}
    </>
  );
};

export default App;

import React from 'react';
import Headers from '../components/Header/Header';
import MainSection from '../UI/MainSection';

import { EarthquakeHttp } from '../http-request/EarthquakeHttp';

const Index = () => {
  EarthquakeHttp();

  return (
    <>
      <Headers />
      <MainSection />
    </>
  );
};

export default Index;

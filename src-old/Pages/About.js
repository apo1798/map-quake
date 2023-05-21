import React from 'react';

import Header from '../components/Header/Header';
import MainContainer from '../UI/CenterContainer';
import AboutContent from '../components/About/AboutContent';

import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>關於 MapQuake 地震地圖</title>
      </Helmet>
      <Header />
      <MainContainer>
        <AboutContent />
      </MainContainer>
    </>
  );
};

export default About;

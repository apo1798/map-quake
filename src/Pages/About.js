import React from 'react';

import Header from '../components/Header/Header';
import MainContainer from '../UI/MainContainer';
import AboutContent from '../components/About/AboutContent';

const About = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <AboutContent />
      </MainContainer>
    </>
  );
};

export default About;

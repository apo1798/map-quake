import React from 'react';

import Header from '../components/Header/Header';
import MainContainer from '../UI/CenterContainer';

import Error from '../components/Error/Error';

const ErrorPage = () => {
  return (
    <>
      <Header />
      <MainContainer>
        <Error />
      </MainContainer>
    </>
  );
};

export default ErrorPage;

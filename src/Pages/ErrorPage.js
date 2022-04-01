import React from 'react';

import Header from '../components/Header/Header';
import MainContainer from '../UI/MainContainer';

const ErrorPage = () => {
  return (
    <MainContainer>
      <Header />
      <div>404! PAGE NOT FOUND :(</div>
    </MainContainer>
  );
};

export default ErrorPage;

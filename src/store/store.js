import { configureStore } from '@reduxjs/toolkit';

import magReducer from './mag-slice';
import dateReducer from './date-slice';
import coordsReducer from './coords-slice';
import appReducer from './app-slice';

// import slices

const store = configureStore({
  reducer: {
    mag: magReducer,
    date: dateReducer,
    coords: coordsReducer,
    app: appReducer,
  },
});

export default store;

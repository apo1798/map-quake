import { createSlice } from '@reduxjs/toolkit';

const initialAppState = {
  isLoading: false,
  httpError: null,
  earthquakeArray: [],
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {
    changeIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    changeHttpError(state, action) {
      state.httpError = action.payload;
    },
    changeEarthquakeArray(state, action) {
      state.earthquakeArray = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export default appSlice.reducer;

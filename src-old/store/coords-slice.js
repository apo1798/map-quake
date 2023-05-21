import { createSlice } from '@reduxjs/toolkit';

const initialCoordsState = {
  lat: 25,
  lng: 121.5,
};
const coordsSlice = createSlice({
  name: 'coords',
  initialState: initialCoordsState,
  reducers: {
    changeLat(state, action) {
      state.lat = action.payload;
    },
    changeLng(state, action) {
      state.lng = action.payload;
    },
  },
});

export const coordsActions = coordsSlice.actions;

export default coordsSlice.reducer;

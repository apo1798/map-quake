import { createSlice } from '@reduxjs/toolkit';

const initialMagState = {
  magnitude: 3,
};

const magSlice = createSlice({
  name: 'magnitude',
  initialState: initialMagState,
  reducers: {
    changeMag(state, action) {
      state.magnitude = action.payload;
    },
  },
});

export const magActions = magSlice.actions;

export default magSlice.reducer;

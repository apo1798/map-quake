import { createSlice } from '@reduxjs/toolkit';

const initialMagState = {
  mag: 3,
};

const magSlice = createSlice({
  name: 'magnitude',
  initialState: initialMagState,
  reducer: {
    changeMag(state, action) {
      state.mag = action.payload;
    },
  },
});

export const magActions = magSlice.actions;

export default magSlice.reducer;

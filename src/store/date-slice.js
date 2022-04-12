import { createSlice } from '@reduxjs/toolkit';

const getDate = (lastMonth = false) => {
  const today = new Date();
  let dateString = `${today.getFullYear()}-${(
    today.getMonth() + (lastMonth ? 0 : 1)
  )
    .toString()
    .padStart(2, '0')}-${today.getDate().toString().padStart(2, '0')}`;

  try {
    const date = new Date(dateString).toISOString().split('T')[0];
    return date;
  } catch {
    dateString = `${today.getFullYear()}-${(today.getMonth() + 1)
      .toString()
      .padStart(2, '0')}-01`;
    const date = new Date(dateString).toISOString().split('T')[0];
    return date;
  }
};

const initialDateSlice = {
  fromDate: getDate(true),
  toDate: getDate(),
};

const dateSlice = createSlice({
  name: 'date',
  initialState: initialDateSlice,
  reducers: {
    changeFromDate(state, action) {
      state.fromDate = action.payload;
    },
    changeToDate(state, action) {
      state.toDate = action.payload;
    },
  },
});

export const dateActions = dateSlice.actions;

export default dateSlice.reducer;

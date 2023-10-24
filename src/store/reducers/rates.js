import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [],
  convertedNumber: 0
}

export const listSlice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    setData(state, action) {
      state.data = action.payload;
    },
    setConvertedNumber(state, action) {
      state.convertedNumber = action.payload;
    }
  }
});

export const { setData, setConvertedNumber } = listSlice.actions;
export default listSlice.reducer;
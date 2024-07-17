import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    increamentByFive: (state, action) => {
      console.log(action)
      state.value += 5;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
})

export const { increment, decrement, increamentByFive, reset } = counterSlice.actions;

export default counterSlice.reducer;
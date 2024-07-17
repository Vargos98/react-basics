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
    incrementByFive: (state, action) => {
      console.log(action)
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
})

export const { increment, decrement, incrementByFive, reset } = counterSlice.actions;
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByFive(amount))
  }, 3000)
}
export default counterSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

// create initialState
const initialState = {
  value: 0,
};

// create a slice
export const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = CounterSlice.actions;
export default CounterSlice.reducer;

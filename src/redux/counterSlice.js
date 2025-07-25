import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: " counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    double : (state) => {
        state.value *= 2;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

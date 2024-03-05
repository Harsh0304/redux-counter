import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.counter = state.counter + 1;
    },
    decrementCount: (state) => {
      state.counter = state.counter - 1;
    },
    addValue: (state, action) => {
      state.counter = state.counter + parseInt(action.payload);
    },
  },
});

export const { incrementCount, decrementCount, addValue } =
  counterSlice.actions;
export default counterSlice.reducer;

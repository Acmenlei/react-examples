import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 1
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state, data) => {
      state.counter += data.payload;
    },
    decrement: (state, data) => {
      state.counter -= data.payload;
    }
  }
})

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
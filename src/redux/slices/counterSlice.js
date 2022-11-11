import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    incrementCount: (state) => {
      state.count += 1;
    },
    decrementCount: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + +action.payload;
    },
  },
});
export const incremnentByAsync = (value) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(value));
  }, 1000);
};
export const { incrementByAmount, decrementCount, incrementCount } =
  counterSlice.actions;

export const getCount = (state) => state.count.count;

export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = action.payload;
    },
    decrement: (state, action) => {
      state.value = action.payload;
    },
    incrementby2: (state, action) => {
     state.value = action.payload
    },
  },
});

export default counterSlice.reducer;
export const { increment, decrement, incrementby2 } = counterSlice.actions;

export const asyncincrement2 = (value) => async (dispatch, getState) => {
  try {
    setTimeout(() => {
      dispatch(incrementby2(value));
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

import { incrementby2 } from "./counterActions";

export { increment, decrement, incrementby2 } from "../reducers/counterSlice";

export const asyncincrement2 = (value) => async (dispatch, getState) => {
  try {
    setTimeout(() => {
      dispatch(incrementby2(value));
    }, 1000);
  } catch (error) {
    console.log(error);
  }
};

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./store/reducers/counterSlice";

const App = () => {
  const { value } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  const incrementbyHandler = () => {
    dispatch(increment(value + 1));
  };

  const decrementbyHandler = () => {
    dispatch(decrement(value - 1));
  };

  return (
    <div className="w-[80%] m-auto mt-32">
      <h1 className="text-3xl ml-5 text-center">{value}</h1>
      <div className="mt-5 gap-[20px] flex items-center justify-center">
        <button
          onClick={incrementbyHandler}
          className="py-2 px-5 bg-orange-600 text-white rounded-md"
        >
          Increment
        </button>
        <button
          onClick={decrementbyHandler}
          className="py-2 px-5 bg-orange-600 text-white rounded-md"
        >
          decrement
        </button>
      </div>
    </div>
  );
};

export default App;

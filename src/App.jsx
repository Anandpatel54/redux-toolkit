import { useSelector } from "react-redux";

const App = () => {
  const { value } = useSelector((state) => state.counterReducer);

  const incrementbyHandler = () => {};
  

  return (
    <div className="w-[80%] m-auto mt-10">
      <h1 className="text-3xl ml-5">{value}</h1>
      <div className="mt-5">
        <button
          onClick={incrementbyHandler}
          className="py-2 px-5 bg-orange-600 text-white rounded-md"
        >
          Increment
        </button>
      </div>
    </div>
  );
};

export default App;

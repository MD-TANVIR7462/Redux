import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/features/counterSlice";

const App = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state.counter);

  return (
    <div className="text-center p-4 text-xl">
      <button className="px-4 py-2 bg-green-500 text-white rounded mr-2" onClick={() => dispatch(increment())}>
        +
      </button>

      <span className="mx-4">{count}</span>

      {}
      <button className="px-4 py-2 bg-red-500 text-white rounded ml-2" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
};

export default App;

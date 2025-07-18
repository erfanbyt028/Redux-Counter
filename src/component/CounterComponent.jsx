import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSlice } from "../redux/counterSlice";

const CounterComponent = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-100 to-white p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md text-center space-y-6">
        <h1 className="text-3xl font-bold text-indigo-600">Counter App</h1>
        <p className="text-xl font-medium text-gray-700">Counter: <span className="font-bold text-indigo-700">{counter}</span></p>
        
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => dispatch(counterSlice.actions.increment())}
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(counterSlice.actions.decrement())}
            className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(counterSlice.actions.double())}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Double
          </button>
          <button
            onClick={() => dispatch(counterSlice.actions.reset())}
            className="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded-xl transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterComponent;

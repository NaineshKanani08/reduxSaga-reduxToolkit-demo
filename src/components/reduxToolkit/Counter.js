import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementCount,
  getCount,
  incrementByAmount,
  incrementCount,
  incremnentByAsync,
} from "../../redux/slices/counterSlice";

const Counter = () => {
  const count = useSelector(getCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState(2);
  const handleChange = (e) => {
    setIncrementAmount(e.target.value);
  };
  return (
    <div>
      <h3>Counter</h3>

      <button
        onClick={() => {
          dispatch(decrementCount());
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          dispatch(incrementCount());
        }}
      >
        +
      </button>
      <div>
        <input
          type="number"
          name="counter"
          onChange={handleChange}
          placeholder="Enter Value"
          value={incrementAmount}
        />
        <button
          onClick={() => {
            dispatch(incrementByAmount(incrementAmount));
          }}
        >
          Add amount
        </button>
        <button
          onClick={() => {
            dispatch(incremnentByAsync(incrementAmount));
          }}
        >
          Add async
        </button>
      </div>
    </div>
  );
};

export default Counter;

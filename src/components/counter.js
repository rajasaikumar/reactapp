// src/features/counter/Counter.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount,multiplyByAmount } from "./counterslice"
// import multiply from './counterslice'
function Counter() {
  // const count = useSelector((state) => state.counter.value);
  const count = useSelector((state)=> state.counter.value);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);

  return (
    <div style={{ padding: 20 }}>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(increment())}>+</button>
      
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(incrementByAmount(amount))}>
          Add Amount
        </button>
        <button onClick={() => dispatch(multiplyByAmount(amount))}>
          multiply Amount
        </button>
      </div>
    </div>
  );
}

export default Counter;

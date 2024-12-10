import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Counter() {
  // Initialize the counter to 0
  const [count, setCount] = useState(0);

  // Function to increment the counter
  const increment = () => setCount(count + 1);

  // Function to decrement the counter
  const decrement = () => setCount(count - 1);

  // Function to reset the counter
  const reset = () => setCount(0);

  return (
    <div className="container text-center mt-5">
      <h2>Counter: {count}</h2>
      <div className="mt-3">
        <button 
          onClick={increment} 
          className="btn btn-primary m-2"
        >
          Increment
        </button>
        <button 
          onClick={decrement} 
          className="btn btn-warning m-2"
        >
          Decrement
        </button>
        <button 
          onClick={reset} 
          className="btn btn-danger m-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;

import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <h2>{count}</h2>
      <button type="button" onClick={increment}>Increment</button> &nbsp;
      <button type="button" onClick={decrement}>Decrement</button>
    </>
  )
}

export { Counter };
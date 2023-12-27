import { useState } from 'react';
const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <p>現在のカウント数: {count}</p>
      <button
        onClick={
          () => {
            setCount(count + 1);
          }}>+</button>
      <button
        onClick={
          () => {
            setCount(count - 1);
          }
        }>-</button>
    </>
  );
};

export default Example;

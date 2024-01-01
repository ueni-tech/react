import { useReducer, useState } from 'react';

const Example = () => {
  const [state, setState] = useState(0);
  const [rstate, dispatch] = useReducer((prev, {type, step}) => {
    switch(type){
      case '+':
        return prev + step;
        break;
      case '-':
        return prev - step;
        break;
      default:
        throw new Error('不適切なアクションです')
    }
    // if(action === '+'){
    //   return ++prev;
    // } else if(action === '-'){
    //   return --prev;
    // }
  }, 0)
  const countUp = () => {
    return setState((prev) => ++prev);
  }
  const rcountUp = () => {
    dispatch({type: '+', step: 2});
  }
  const rcountDown = () => {
    dispatch({type: '-', step: 3});
  }
  return (
    <>
      <div>
        <h3>{state}</h3>
        <button onClick={countUp}>+</button>
      </div>
      <div>
        <h3>{rstate}</h3>
        <button onClick={rcountUp}>+</button>
        <button onClick={rcountDown}>-</button>
      </div>
    </>
  );
};

export default Example;

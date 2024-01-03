import { useCount } from './Hooks';

const Example = () => {

  const {count, countUp} = useCount();

  return (
    <>
      <div>Counts: {count}</div>
      <button onClick={countUp}>Count Up!</button>
    </>
  );
};

export default Example;

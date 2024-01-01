let value =0;

const Child = () => {
  value++;
  return <div>{value}</div>
}

const ChildPure = ({value}) => {
  return <div>{value}</div>
}

const Example = () => {
  let value = 0;

  return (
    <>
    <Child></Child>
    <Child></Child>
    <Child></Child>
    <ChildPure value={++value}></ChildPure>
    <ChildPure value={++value}></ChildPure>
    <ChildPure value={++value}></ChildPure>
    </>
  );
};

export default Example;

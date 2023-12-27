const Hello = (props) => {
  // props.name = "Bob"; // POINT propsは読み取り専用
  console.log(props.name);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;
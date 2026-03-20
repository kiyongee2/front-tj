//Props: 상위 컴포넌트에서 하위컴포넌트로 파라미터를 전달하는 것
//Home -> Prop name, age

const Prop = (props) => {
  console.log(props);
  return(
    <div className="prop-page page">
      <h2>Prop.jsx</h2>
      <p>
        props값: {props.name}, {props.age}
      </p>
    </div>
  );
}
export default Prop;
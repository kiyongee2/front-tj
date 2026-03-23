
export default function Dog(props) {
  
  return (
    <div>
      <h2>강아지</h2>
      <p>품종: {props.breed}</p>
      <p>나이: {props.age}</p>
    </div>
  )
}


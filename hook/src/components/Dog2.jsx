

export default function Dog2(props) {
  const { breed, age, color } = props;

  return (
    <div>
      <h2>강아지</h2>
      <p>품종: {breed}</p>
      <p>나이: {age}</p>
      <p>색상: {color}</p>
    </div>
  )
}


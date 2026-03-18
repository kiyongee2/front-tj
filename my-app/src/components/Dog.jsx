
/*
const Dog = (props) => {
  return (
    <div> 
      <h2>강아지 컴포넌트</h2>
      <p>품종: {props.breed}</p>
      <p>나이: {props.age}</p>
    </div>
  )
}
*/

const Dog = (props) => {
  // props 객체에서 breed와 age를 구조 분해 할당합니다.
  const { breed, age } = props; 

  return (
    <div> 
      <h2>강아지 컴포넌트</h2>
      <p>품종: {breed}</p>
      <p>나이: {age}</p>
    </div>
  )
}

export default Dog


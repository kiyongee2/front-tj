import { useEffect, useState } from "react"

const UseEffectEx = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(1);

  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  }

  const onChangeAge = (e) => {
    setAge(e.target.value);
  }

  useEffect(() => {
    console.log("랜더링...");
  }, [age])

  return(
    <div>
      <h2>사용자 정보</h2>
      <input 
        type="text" 
        value={name}
        onChange={onChangeName}
      />
      <input 
        type="number" 
        value={age}
        onChange={onChangeAge}
      />
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  )
}

export default UseEffectEx;
import { useState, useEffect } from "react";

const Info = () => {
  const[name, setName] = useState('');
  const[age, setAge] = useState(0);
  
  useEffect(() => {
    console.log(name);
    console.log({name, age});
  }, [name, age]);  //name이나 age값이 바뀔 때마다 useEffect함수 실행됨

  const onChangeName = (e) => {
    setName(e.target.value);
  }
  const onChangeAge = (e) => {
    setAge(e.target.value);
  }
  return(
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
      </div>
      <div>
        <input value={age} onChange={onChangeAge} />
      </div>

      <div>
        이름: {name}, 나이: {age}
      </div>
    </div>
  )
}

export default Info
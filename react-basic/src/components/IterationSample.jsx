import { useState } from "react"

const IterationSample = () => {
  //컴포넌트 배열을 랜더링할땐 key 값 설정을 해줘야 함
  const [names, setNames] = useState([
    {id: 1, text: "눈사람"},
    {id: 2, text: "얼음"},
    {id: 3, text: "눈"},
    {id: 4, text: "바람"},
  ])
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(5);   //새로운 항목 추가시 사용 id
  
  const onChange = e => setInputText(e.target.value);

  const onClick = () => {
    //리엑트에서 상태를 업데이트 할땐 기존 상태를 그대로 두면서 
    //새로운 값을 상태로 설정해야 함 - 불변성 유지
    //concat()-새 배열 생성, filter() - 불변성유지 특정 항목 삭제
    const nextNames = names.concat({  
      id: nextId,  //nextId값을 id로 설정함
      text: inputText
    });
    setNextId(nextId + 1); //nextid 값에 1을 더해 줌
    setNames(nextNames);   //names 값을 업데이트함
    setInputText('');      //inputText 값 초기화
  }

  const onRemove = id => {
    const nextNames = names.filter(name => name.id !== id);
    setNames(nextNames);
  }

  //names 배열 출력
  const namesList = names.map((name) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
        {name.text}
      </li>
  ));
  return(
    <div>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{namesList}</ul>
    </div>
  )
}

export default IterationSample
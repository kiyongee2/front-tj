
const Example03 = () => {

  const handleClick = () => {
    alert("버튼이 클릭되었습니다.");
  }

  const greet = (name) => alert(`안녕하세요, ${name}님`)

  const handleInputChange = (event) => {
    console.log(event);
    console.log(event.target.value);
    
  }

  return(
    <>
      <h2>Example03</h2>
      <button onClick={handleClick}>클릭하세요</button>
      <button onClick={() => greet('김도영')}>인사하기</button>
      {/* 입력 폼 */}
      <input 
        type="text" 
        onChange={handleInputChange}
      />
    </>

  )

}

export default Example03;
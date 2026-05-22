
const Example01 = () => {
  const isLoggedIn = true;
  
  /*
  if문 사용
  let result = "";

  if(isLoggedIn){
    result = "로그인 상태입니다.";
  }else{
    result = "로그아웃 상태입니다.";
  }
  */

  return(
    <div>
      <h2>조건부 렌더링</h2>
      {/* <p>{result}</p> */}
      {/* 삼항 연산자 사용 */}
      {isLoggedIn ? 
        <p>로그인 상태입니다.</p> : 
        <p>로그아웃 상태입니다.</p>}

      {/* && 연산자 사용 */}
      {isLoggedIn && <p>로그인 상태입니다.</p>}
    </div>
  )
}

export default Example01;


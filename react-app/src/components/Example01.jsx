
const Example01 = () => {
  const isLoggedIn = true;

  let result = ""

  if(isLoggedIn){
    result = "로그인 상태입니다."
  }else{
    result = "로그아웃 상태입니다."
  }

  return(
    <div>
      <h2>조건부 랜더링</h2>
      {/* <h4>{result}</h4> */}
      {isLoggedIn ? <p>로그인 상태입니다</p> : <p>로그아웃 상태입니다</p>}
      {isLoggedIn && <p>로그인 상태입니다</p>}
    </div>
  )
}

export default Example01;
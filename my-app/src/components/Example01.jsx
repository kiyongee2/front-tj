// src/components/Example01.jsx
const Example01 = () => {
  // 조건부 랜더링
  // 로그인 상태를 나타내는 변수 (예시에서는 false로 설정)
  const isLoggedIn = true; 

  return (
    <div>
      <h2>Example 01</h2>
      {/* 조건부 랜더링 - 삼항 연산자 */}
      {isLoggedIn ? <p>로그인 상태입니다.</p> : <p>로그아웃 상태입니다.</p>}

      {/* && 연산자를 사용한 조건부 랜더링 */}
      {isLoggedIn && <p>로그인 상태입니다.</p>}
    </div>
  )
}

export default Example01


import { useState } from "react"

// 임시 데이터(객체 리스트) 생성
const users = [
  {username: 'user1', password: 'user1111'},
  {username: 'user2', password: 'user2222'},
  {username: 'admin', password: 'admin0000'}
]

const SignIn = () => {
  // 객체 상태 관리
  const [formData, setFormData] = useState(
    {username: '', password: ''}
  )
  // 로그인 결과 상태 관리
  const [result, setResult] = useState(null);

  // 입력 필드 변경 핸들러
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    // console.log(e);
    setFormData({
      ...formData,
      [name]: value //name 속성과 값
    }) 
  }

  //폼 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const {username, password} = formData;
    //데이터 일치 여부 - find() 메서드
    const matched = users.find((user) => 
      user.username === username && user.password === password);

    //로그인 성공여부에 따라 결과 상태 업데이트
    setResult(matched ? 'success' : 'fail');
  }

  return(
    <div className="sign-in">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input 
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            placeholder="아이디를 입력하세요"
          />
        </p>
        <p>
          <input 
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="비밀번호를 입력하세요"
          />
        </p>
        <button type="submit">로그인</button>
      </form>
      {/* 결과 메시지 출력 */}
      {result === 'success' && (
        <p className="result-msg" style={{color: 'blue'}}>
          환영합니다. {formData.username}님!
        </p>
      )}
      {result === 'fail' && (
        <p className="result-msg" style={{color: 'red'}}>
          아이디 또는 비밀번호가 일치하지 않습니다.
        </p>
      )}
    </div>
  )
}

export default SignIn
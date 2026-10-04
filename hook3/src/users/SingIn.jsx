import { useState } from "react";

const users = [
  {username: "user1", password: 'user1111'},
  {username: "user2", password: 'user2222'},
  {username: "admin", password: 'admin0000'},
]

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });

  //로그인 결과 상태 관리
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); //기본 동작 막기
    console.log("제출 데이터: ", formData);

    // 로그인 결과 처리
    const {username, password} = formData;

    // 데이터 일치 여부
    // find() - 조건에 맞는 첫 요소를 반환하고, 없으면 undefined를 반환한다.
    const matched = users.find((user) => 
      user.username === username && user.password === password);

    // 로그인 성공여부에 따라 결과 상태 업데이트
    setResult(matched ? "success" : "fail");

    // 입력 필드 초기화
    setFormData({username: "", password: ""});
  }

  return(
    <div className="sign-in">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <input 
              type="text"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              placeholder="아이디 입력"
            />
          </li>
          <li>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="비밀번호 입력"
            />
          </li>
          <li>
            <button type="submit">로그인</button>
          </li>
        </ul>
      </form>
      {/* 결과 메시지 출력 */}
      {result === "success" && (
        <p style={{color: 'blue'}}>환영합니다.</p>
      )}
      {result === "fail" && (
        <p style={{color: 'red'}}>아이디 또는 비밀번호가 일치하지 않습니다.</p>
      )}
    </div>
  )
}

export default SignIn;
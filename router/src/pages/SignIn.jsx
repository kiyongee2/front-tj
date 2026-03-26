
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TEMP_USERS = [
  { userId: 'admin', password: '00000' },
  { userId: 'cloud', password: 'c1234' },
  { userId: 'tester', password: 'test' },
];

const SignIn = ({ onLogin }) => {
  // 1. 입력 데이터를 객체로 통합
  const [loginData, setLoginData] = useState(
    { userId: '', password: '' }
  );
  const [result, setResult] = useState(null);

  const navigate = useNavigate();

  // 2. 통합 핸들러 (name 속성 활용)
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e);
    
    setLoginData({ ...loginData, [name]: value });
    setResult(null); // 입력 시 결과 메시지 숨김
  };

  // 3. 제출 핸들러
  const handleSubmit = (e) => {
    e.preventDefault();
    const { userId, password } = loginData;

    //find 메서드로 사용자 데이터에서 첫번째 일치하는 항목 찾기
    const matched = TEMP_USERS.find(
      (user) => user.userId === userId && user.password === password
    );

    // 로그인 성공 여부에 따라 결과 상태 업데이트
    // setResult(matched ? 'success' : 'fail');
    if (matched) {
      onLogin(userId);
      navigate('/');
    }else{
      setResult('fail');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            name="userId" // name 추가
            type="text"
            placeholder="ID 입력"
            value={loginData.userId}
            onChange={handleChange}
          />
        </p>
        <p>
          <input
            name="password" // name 추가
            type="password"
            placeholder="패스워드 입력"
            value={loginData.password}
            onChange={handleChange}
          />
        </p>
        <button type="submit">로그인</button>
      </form>

      {/* 결과 메시지 부분 */}
      {result === 'success' && (
        <p style={{ color: 'green' }}>환영합니다, {loginData.userId}님.</p>
      )}
      {result === 'fail' && (
        <p style={{ color: 'red' }}>아이디 또는 비밀번호가 올바르지 않습니다.</p>
      )}
    </div>
  );
}

export default SignIn
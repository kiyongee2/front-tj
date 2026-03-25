import { useState } from 'react';

// 임시 사용자 데이터
const TEMP_USERS = [
  { username: 'admin', password: '00000' },
  { username: 'cloud', password: 'c1234' },
  { username: 'tester', password: 'test' },
];

const SignIn2 = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  // 로그인 결과 상태 
  // (null: 초기 상태, 'success': 로그인 성공, 'fail': 로그인 실패)
  const [result, setResult] = useState(null); 

  // ID 입력 처리
  const handleChangeUserId = (e) => {
    setUserId(e.target.value);
    setResult(null); // 입력이 변경될 때마다 결과 초기화
  };

  // 비밀번호 입력 처리
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    setResult(null); // 입력이 변경될 때마다 결과 초기화
  };

  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지

    // TEMP_USERS 배열에서 입력한 아이디와 비밀번호가 일치하는 사용자 찾기
    const matched = TEMP_USERS.find(
      (user) => user.username === userId && user.password === password
    );

    if (matched) {
      setResult('success');
      console.log(`로그인 성공: ${userId}`);
    } else {
      setResult('fail');
      console.log('로그인 실패: 아이디 또는 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div>
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            placeholder='ID 입력'
            value={userId}
            onChange={handleChangeUserId}
          />
        </p>
        <p>
          <input
            type="password"
            placeholder='패스워드 입력'
            value={password}
            onChange={handleChangePassword}
          />
        </p>
        <p>
          <button type="submit">로그인</button>
        </p>
      </form>

      {/* 로그인 결과 메시지 */}
      {result === 'success' && (
        <p style={{ color: 'green' }}>환영합니다, {userId}님.</p>
      )}
      {result === 'fail' && (
        <p style={{ color: 'red' }}>아이디 또는 비밀번호가 올바르지 않습니다.</p>
      )}
    </div>
  );
};

export default SignIn2;

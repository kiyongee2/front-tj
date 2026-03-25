
import { useState } from 'react';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [job, setJob] = useState('직장인');
  const [gender, setGender] = useState('');
  const [text, setText] = useState('');

  // 성별
  const handleChangeGender = (e) =>
    setGender(e.target.value);

  // 직업 선택
  const handleChangeJob = (e) => 
    setJob(e.target.value);

  //자기 소개
  const handleChangeIntro = (e) => 
    setText(e.target.value);
    
  // 폼 제출
  const handleSubmit = (e) => {
    e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
    console.log(`이름: ${username}`);
    console.log(`직업: ${job}`);
    console.log(`성별: ${gender}`);
    console.log(`자기소개: ${text}`);
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>
            이름{' '}
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </p>
        <p>
          <label>
            직업{' '}
          </label>
          <select value={job} onChange={handleChangeJob}>
            <option value="직장인">직장인</option>
            <option value="학생">학생</option>
            <option value="프리랜서">프리랜서</option>
          </select>
        </p>
        <p>
          <label>
            성별{' '}
          </label>
          <input 
            type="radio" 
            value="남자"
            checked={gender === '남자'}
            onChange={handleChangeGender}
          /> 남자
          <input 
            type="radio" 
            value="여자"
            checked={gender === '여자'}
            onChange={handleChangeGender}
          /> 여자
        </p>
        <p>
          <label>
            자기소개{' '}
          </label>
          <br />
          <textarea 
            value={text} 
            onChange={handleChangeIntro}
            rows={5}
            cols={30}
          ></textarea>
        </p>
        <p>
          <button type="submit">가입</button>
        </p>
      </form>
    </div>
  );
}

export default SignUp;

import { useState } from 'react';

const SignUp2 = () => {
  // 1. 상태를 객체 하나로 통합
  const [formData, setFormData] = useState({
    username: '',
    job: '직장인',
    gender: '',
    text: '',
  });

  // 2. 통합 핸들러 함수
  const handleChange = (e) => {
    const { name, value } = e.target; // input의 name 속성과 value를 가져옴
    setFormData({
      ...formData,    // 기존 데이터 복사 (Spread Operator)
      [name]: value,  // 변경된 name 값만 업데이트
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('제출 데이터:', formData);
  };

  return (
    <div>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label>이름 </label>
          <input
            name="username" // name 속성 추가
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </p>

        <p>
          <label>직업 </label>
          <select name="job" value={formData.job} onChange={handleChange}>
            <option value="직장인">직장인</option>
            <option value="학생">학생</option>
            <option value="프리랜서">프리랜서</option>
          </select>
        </p>

        <p>
          <label>성별 </label>
          <input 
            type="radio" 
            name="gender" 
            value="남자"
            checked={formData.gender === '남자'}
            onChange={handleChange}
          /> 남자
          <input 
            type="radio" 
            name="gender" 
            value="여자"
            checked={formData.gender === '여자'}
            onChange={handleChange}
          /> 여자
        </p>

        <p>
          <label>자기소개 </label><br />
          <textarea 
            name="text"
            value={formData.text} 
            onChange={handleChange}
            rows={5}
            cols={30}
          />
        </p>
        
        <button type="submit">가입</button>
      </form>
    </div>
  );
}

export default SignUp2;
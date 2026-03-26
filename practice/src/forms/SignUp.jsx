
import {useState} from 'react'

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    job: '직장인',
    gender: '',
    text: ''
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출 데이터:", formData);
    
  }

  return(
    <div>
      <h2>회원 가입</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input 
            type="text" 
            placeholder='이름 입력'
            name="username"
            value={formData.username} 
            onChange={handleChange}
          />
        </p>
        <p>
          <select name="job" id="{formData.job}" onChange={handleChange}>
            <option value="직장인">직장인</option>
            <option value="학생">학생</option>
            <option value="프리랜서">프리랜서</option>
          </select>
        </p>
        <p>
          <input 
            type="radio"
            name="gender"
            value="남자"
            checked={formData.gender == '남자'}
            onChange={handleChange}
            />남자
          <input 
            type="radio"
            name="gender"
            value="여자"
            checked={formData.gender == '여자'}
            onChange={handleChange}
            />여자
        </p>
        <p>
          <textarea 
            name="text" 
            value={formData.text}
            onChange={handleChange}
            rows={5}
            cols={30}
          />
        </p>
        <input type="submit" value="가입" />

      </form>
    </div>
  )
}

export default SignUp
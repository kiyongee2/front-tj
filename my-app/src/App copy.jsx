import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import myPhoto from './assets/my-photo.jpg'
import Profile2 from './Profile2';

function MyButton() {
  return (
    <button>Click Me</button>
  )
}

function MyPhoto() {
  return (
    <img src={myPhoto} alt="My Photo" width={200} className='photo' />
  )
}

const person = {
  name: '김기용',
  theme: {
    backgroundColor: 'lightblue',
    color: 'darkblue',
    padding: '20px',
    borderRadius: '10px',
  }
}

function Profile() {
  return (
    <>
      <div>
        {/* 인라인 스타일 적용 */}
        <h1
          style={{
            color: 'red',
            fontWeight: 'bold'
          }}   
        >Hello, World!</h1>
      </div>  

      <div className="welcome">
        <h2>Welcome~ <br /> 홈페이지 방문을 환영합니다!</h2>
      </div>
      {/* 버튼 컴포넌트 사용 */}
      <MyButton />
      <section style={person.theme}>
        <h1>{person.name}'s Profile</h1>
        <img 
          src={myPhoto} 
          alt="My Photo" 
          width={200} 
          className='photo' 
        />
        <ul>
          <li>이름: {person.name}</li>
          <li>직업: 소프트웨어 개발자</li> 
          <li>취미: 여행, 영화보기</li>
      </ul>
      </section>
    </>
  )
}

function LoginForm() {
  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <h2>로그인</h2>
      <input type="email" placeholder="이메일" />
      <input type="password" placeholder="비밀번호" />
      <button>로그인</button>
    </div>
  )
}

function AdminPanel() {
  return (
    <div style={{ padding: '20px', border: '1px solid green', borderRadius: '5px', backgroundColor: '#f0f0f0' }}>
      <h2>관리자 패널</h2>
      <p>환영합니다, 관리자님!</p>
      <ul>
        <li>사용자 관리</li>
        <li>콘텐츠 관리</li>
        <li>설정</li>
      </ul>
    </div>
  )
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 조건부 렌더링
  let content;
  if(isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  // 리스트 렌더링
  const products = [
    { id: 1, name: '노트북', price: 1000 },
    { id: 2, name: '스마트폰', price: 500 },
    { id: 3, name: '태블릿', price: 300 }
  ];

  return (
    <>
      <div>
        <h1>Welcome to my app</h1>
        {/* <MyButton /> */}
        <img 
          src={reactLogo} 
          alt="React Logo" 
          className="logo react" 
        />
        <br/>
        <button 
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}
        >
          {isLoggedIn ? '로그아웃' : '로그인'}
        </button>
        <p>
          {content}
        </p>

        {products.map(product => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>가격: ${product.price}</p>
          </div>
        ))}
        {/* <MyPhoto /> */}
        {/* <Profile /> */}
        {/* <Profile2 /> */}
      </div>
    </>
  )
}

export default App

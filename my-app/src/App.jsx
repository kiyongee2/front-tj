
import './App.css' // CSS 파일을 import하여 스타일을 적용합니다.
import profilePhoto from './assets/my-photo.jpg' 
import flower from './assets/flower.jpg'
import Example01 from './components/Example01' 
import Example02 from './components/Example02'
import Example03 from './components/Example03'
import Dog from './components/Dog'
import Box from './components/Box'
import Profile2 from './Profile2'
import Counter from './components/Counter'
import AddDrink from './components/AddDrink'
import Car from './components/Car'

// 버튼 컴포넌트 정의
function MyButton() {
  return (
    <button>
      목록 보기
    </button>
  );
}

function App() {
  const season = "봄";

  // 사용자 정보 객체 정의
  const user = {
    name: '김기용',
    imageUrl: profilePhoto,
  }

  return (
    <>
      <section>
        <h1>{user.name}</h1>
        <img
          className="profile-photo"
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
        />
      </section>

      <h2>현재 계절은 {season}입니다.</h2>
      <img 
        src={flower} 
        alt="꽃" 
        width="400" 
      />

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
      {/* <MyButton /> */}

      {/* Example 컴포넌트 사용 */}
      <Example01 />
      <Example02 />
      <Example03 />

      {/* Dog 컴포넌트 사용 */}
      {/* <Dog 
        breed="포메라니안"
        age={3}
      /> */}

      {/* Box 컴포넌트 사용 - children을 통해 내용 전달 */}
      {/* <Box>
        <h3>박스 안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box>

      <Box>
        <h3>또 다른 박스</h3>
        <p>이것은 또 다른 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box> */}
      {/* <Profile2 /> */}
      {/* <Counter /> */}
      <AddDrink />
      <Car />
    </>
  )
}

export default App

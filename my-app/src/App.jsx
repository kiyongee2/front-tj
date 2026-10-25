
import './App.css' // CSS 파일을 import하여 스타일을 적용합니다.
import profilePhoto from './assets/my-photo.jpg' 
import Greet from './test/Greet';


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
      <Greet name="김기용" />
    </>
  )
}

export default App

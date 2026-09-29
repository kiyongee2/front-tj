
import heroImg from './assets/hero.png'
import './App.css'
import Example01 from './components/Example01'
import Example03 from './components/Example03'
import Dog from './components/Dog.jsx'
import Dog2 from './components/Dog2.jsx'

function MyButton(){
  return(
    <div className='btn'>
      <button>
        목록 보기
      </button>
    </div>
  )
}

function App() {
  const season = "여름"

  return (
    <>
      <div>
        <h1
          style={{
            color: 'red',
            fontWeight: 'bold'
          }}
        >Hello, React!</h1>
      </div>

      <div className='welcome'>
        <h2>welome!<br /> 홈페이지 방문을 환영합니다.</h2>
      </div>
      <section>
        <h3>현재 계절은 {season}입니다.</h3>
        {/* <img src={heroImg} alt="메인이미지" /> */}
      </section>
      {/* 버튼 컴포넌트 */}
      <MyButton />
      <Example01 />
      <Example03 />
      <Dog 
        breed="말티즈"
        age={2}
      />
      <Dog2 
        breed="진돗개"
        age={4}
      />
    </>
  )
}

export default App

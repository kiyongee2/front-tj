
import heroImg from './assets/hero.png'
import './App.css'
import Main from './components/Main';
import Example01 from './components/Example01';
import Drinks from './hooks/Drinks';
import Drinks2 from './hooks/Drinks2';
import Clock from './hooks/Clock';
import SignIn from './forms/SignIn';
import Dog from './components/Dog'
import Box from './components/Box'
import Counter from './hooks/Counter';

function App() {
  const dogInfo = {
    breed: '말티즈',
    age: 2,
    color: '흰색'
  }
  
  return (
    <div className='main'>
      {/* <h2>Props Children</h2>
      <Box>
        <h3>박스안의 내용</h3>
        <p>이것은 Box 컴포넌트 안에 있는 내용입니다.</p>
      </Box> */}
      {/* <Dog 
        breed={dogInfo.breed}
        age={dogInfo.age}
        color={dogInfo.color}
      /> */}
      {/* <Counter /> */}
      {/* <Main /> */}
      {/* <Example01 /> */}
      {/* <Drinks /> */}
      {/* <Drinks2 /> */}
      {/* <Clock /> */}
      <SignIn />
    </div>
  )
}

export default App

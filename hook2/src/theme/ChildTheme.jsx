import { useContext } from "react"
import { ThemeContext } from "./ParentTheme"

const ChildTheme = () => {
  // Context 사용
  const { currentTheme, toggleTheme } = useContext(ThemeContext);
  console.log("현재 테마:", currentTheme);
  
  // 자식 컴포넌트 스타일
  const childStyle = {
    background: currentTheme === 'dark' ? '#555' : '#f0f0f0',
    color: currentTheme === 'dark' ? '#fff' : '#333',
    padding: '15px',
  };

  // 자식 컴포넌트 렌더링
  return(
    <div style={childStyle}>
      <h4>Child 컴포넌트</h4>
      <p>현재 테마: <strong>{currentTheme}</strong></p>
      <button onClick={toggleTheme}>
        테마 변경
      </button>
    </div>
  )
}

export default ChildTheme

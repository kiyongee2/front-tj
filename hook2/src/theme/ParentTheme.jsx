import { createContext, useState } from "react"
import ChildTheme from "./ChildTheme";

// Context 생성
export const ThemeContext = createContext("light");

const ParentTheme = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  // 테마 토글 함수
  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (
      prevTheme === 'light' ? 'dark' : 'light'
    ))
  }

  // 부모 컴포넌트 스타일
  const parentStyle = {
    background: currentTheme === 'dark' ? '#333' : '#fff',
    color: currentTheme === 'dark' ? '#fff' : '#333',
    padding: '20px'
  }

  // 부모 컴포넌트 렌더링
  return(
    <div style={parentStyle}>
      <h3>현재 테마: {currentTheme}</h3>
      {/* 하위 컴포넌트에 Context 제공 */}
      <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
        <ChildTheme />
      </ThemeContext.Provider>
    </div>
  )
}

export default ParentTheme


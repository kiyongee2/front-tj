
import { createContext, useState } from 'react';
import ChildTheme from './ChildTheme';

// ThemeContext를 생성합니다. "light"는 기본값입니다.
export const ThemeContext = createContext("light"); 

const ParentTheme = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => 
      (prevTheme === "light" ? "dark" : "light"));
  };

  // 테마에 따른 스타일 정의
  const parentStyle = {
    backgroundColor: currentTheme === "dark" ? '#333' : '#fff',
    color: currentTheme === "dark" ? '#fff' : '#333',
    padding: '20px',
  };

  return (
    <>
      <div style={parentStyle}>
        <p>현재 테마: {currentTheme}</p>
        {/* ThemeContext.Provider로 감싸서 theme 값을 
                  하위 컴포넌트에 제공합니다 */}
        <ThemeContext.Provider value={currentTheme}>
          <ChildTheme />
        </ThemeContext.Provider>
      </div>
      <hr />
      <div>
        <button onClick={toggleTheme}>테마 변경</button>
      </div>
    </>
  );
}

export default ParentTheme;



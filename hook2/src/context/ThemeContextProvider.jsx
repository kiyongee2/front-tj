
import { createContext, useState } from 'react';
import ChildTheme from './ChildTheme';

// ThemeContext를 생성합니다. "light"는 기본값입니다.
export const ThemeContext = createContext("light"); 

const ThemeContextProvider = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const toggleTheme = () => {
    setCurrentTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* <p>현재 테마: {currentTheme}</p> */}
      {/* ThemeContext.Provider로 감싸서 theme 값과 
                  toggleTheme 함수를 하위 컴포넌트에 제공합니다 */}
      <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
        <ChildTheme />
      </ThemeContext.Provider>
    </div>
  );
}

export default ThemeContextProvider;



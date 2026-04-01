
import { useContext } from 'react';
import { ThemeContext } from './ParentTheme';

const ChildTheme = () => {
  // ThemeContext에서 현재 테마 값을 가져옵니다.
  const theme = useContext(ThemeContext); 
  console.log("현재 테마:", theme); 

  // 테마에 따른 스타일 정의
  const childStyle = {
    backgroundColor: theme === "dark" ? '#555' : '#f0f0f0',
    color: theme === "dark" ? '#fff' : '#333',
    padding: '20px',
  };

  return (
    <div style={childStyle}>
      <p>현재 테마: <strong>{theme}</strong></p>
    </div>
  );
}

export default ChildTheme;


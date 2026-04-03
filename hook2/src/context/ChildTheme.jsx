
import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';

const ChildTheme = () => {
  // ThemeContext에서 현재 테마 값과 toggleTheme 함수를 가져옵니다.
  const { currentTheme, toggleTheme } = useContext(ThemeContext); 
  console.log("현재 테마:", currentTheme); 

  // 테마에 따른 스타일 정의
  const childStyle = {
    backgroundColor: currentTheme === "dark" ? '#555' : '#f0f0f0',
    color: currentTheme === "dark" ? '#f0f0f0' : '#555',
    padding: '20px',
    height: '70vh', /* 부모보다 조금 더 높게 설정 */
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px',
    fontSize: '16px',
    backgroundColor: currentTheme === "dark" ? '#333' : '#ddd',
    color: currentTheme === "dark" ? '#f0f0f0' : '#333',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  return (
    <>
    <div style={childStyle}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ color: 'inherit' }}>현재 테마: {currentTheme}</h2>
        <button onClick={toggleTheme} style={buttonStyle}>테마 변경</button>
      </div>
    </div>
    </>
  );
}

export default ChildTheme;


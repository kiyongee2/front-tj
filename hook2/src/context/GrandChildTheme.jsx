
import { useContext } from 'react';
import { ThemeContext } from './ThemeContextProvider';

const GrandChildTheme = () => {
  // props 없이 Context에서 직접 꺼냄
  const { currentTheme, toggleTheme } = useContext(ThemeContext);

  const style = {
    backgroundColor: currentTheme === 'dark' ? '#444' : '#e0e0e0',
    color: currentTheme === 'dark' ? '#f0f0f0' : '#333',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    marginTop: '10px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    marginTop: '10px',
    fontSize: '16px',
    backgroundColor: currentTheme === 'dark' ? '#222' : '#ccc',
    color: currentTheme === 'dark' ? '#f0f0f0' : '#333',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '4px',
  };

  return (
    <div style={style}>
      <h4>GrandChild 컴포넌트</h4>
      <p>현재 테마: <strong>{currentTheme}</strong></p>
      <button onClick={toggleTheme} style={buttonStyle}>
        테마 변경
      </button>
    </div>
  );
};

export default GrandChildTheme;

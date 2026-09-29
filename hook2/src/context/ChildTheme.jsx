
import GrandChildTheme from './GrandChildTheme';

// Child는 theme 관련 props를 전혀 받지 않습니다
// GrandChild가 Context에서 직접 꺼내 씁니다 → props drilling 없음
const ChildTheme = () => {

  const style = {
    padding: '15px',
    border: '2px dashed #aaa',
    borderRadius: '8px',
    margin: '10px',
  };

  return (
    <div style={style}>
      <h3>Child 컴포넌트</h3>
      <p>theme props를 받지 않아도 GrandChild가 Context에서 직접 사용합니다.</p>
      <GrandChildTheme />
    </div>
  );
};

export default ChildTheme;


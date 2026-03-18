
// Box 컴포넌트 정의
const Box = ({children}) => {
  const boxStyle = {
    width: '200px',
    border: '1px solid black',
    padding: '20px',
    margin: '10px',
  };

  return <div style={boxStyle}>{children}</div>;
}

export default Box


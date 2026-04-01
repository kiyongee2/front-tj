
const GrandChildProps = ({ user }) => {
  return (
    <div style={{ marginLeft: '20px', border: '1px solid #ddd', padding: '10px' }}>
      <h3>GrandChildProps 컴포넌트입니다.</h3>
      <p>사용자 이름: {user.name}</p>
      <p>사용자 나이: {user.age}</p>
    </div>
  );
}

export default GrandChildProps;

const GrandChildProps = ({ user }) => {
  return (
    <div className="user-grandchild">
      <h3>GrandChildProps 컴포넌트입니다.</h3>
      <p>사용자 이름: {user.name}</p>
      <p>사용자 나이: {user.age}</p>
    </div>
  );
}

export default GrandChildProps;


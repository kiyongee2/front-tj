import GrandChildProps from "./GrandChildProps";

const ChildProps = ({ user }) => {
  return (
    <div style={{ marginLeft: '20px', border: '1px solid #bbb', padding: '10px' }}>
      {/* <h2>ChildProps 컴포넌트입니다.</h2>
      <p>사용자 이름: {user.name}</p>
      <p>사용자 나이: {user.age}</p> */}
      <GrandChildProps user={user} />
    </div>
  );
}

export default ChildProps;
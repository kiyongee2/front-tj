
import ChildProps from "./ChildProps";

const ParentProps = () => {
  const user = {
    name: "이순신",
    age: 45,
  };

  return (
    <div style={{ border: '2px solid #000', padding: '10px', margin: '10px' }}>
      <h2>ParentProps 컴포넌트입니다.</h2>
      <ChildProps user={user} />
    </div>
  );
}

export default ParentProps;
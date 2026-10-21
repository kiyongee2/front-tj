import { useContext } from "react";
import { UserContext } from "./UserContext";

// 손자 컴포넌트: 중간(UserChild)을 거치지 않고 Context에서 직접 user를 받음
const UserGrandChild = () => {
  // useContext 훅으로 UserContext에서 user 데이터를 꺼내옴
  const user = useContext(UserContext);

  return(
    <div className="user-grandchild">
      <h2>UserGrandChild 컴포넌트입니다.</h2>
      <p>이름: {user.name}</p>
      <p>나이: {user.age}</p>
    </div>
  )
}

export default UserGrandChild;

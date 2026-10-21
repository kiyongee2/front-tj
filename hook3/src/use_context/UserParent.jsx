import { UserContext } from "./UserContext";
import UserChild from "./UserChild";

const UserParent = () => {
  const user = {
    name: "오상식",
    age: 45
  }

  return(
    <div className="user-parent">
      <h2>UserParent 컴포넌트입니다.</h2>
      {/* UserContext.Provider로 감싸면 하위 컴포넌트 어디서든 
          user 데이터를 꺼내 쓸 수 있음 */}
      <UserContext.Provider value={user}>
        {/* props 전달 없음 */}
        <UserChild />
      </UserContext.Provider>
    </div>
  )
}

export default UserParent;

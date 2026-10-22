import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Status = () => {
  const {isLogin, toggleLogin} = useContext(AuthContext);

  return(
    <div>
      <h2>로그인/로그아웃 토글</h2>
      <p>상태: {isLogin ? "로그인" : "로그아웃"}</p>
      <button onClick={toggleLogin}>
        {isLogin ? "로그아웃" : "로그인"}
      </button>
    </div>
  )
}

export default Status;
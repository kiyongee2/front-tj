// Status.jsx
import { useContext } from "react";
import { AuthContext } from "./AuthContext";
// import { AuthContext } from "./AuthProvider";

export function Status() {
  // AuthContext에서 상태와 함수를 가져오기
  const { isLogin, toggleLogin } = useContext(AuthContext);

  return (
    <div>
      <p>상태: {isLogin ? "로그인" : "로그아웃"}</p>
      <button onClick={toggleLogin}>
        {isLogin ? "로그아웃" : "로그인"}
      </button>
    </div>
  );
}
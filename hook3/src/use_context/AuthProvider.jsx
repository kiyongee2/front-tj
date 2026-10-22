// AuthProvider.jsx
import { createContext, useState } from "react";
import { AuthContext } from "./AuthContext";

// export const AuthContext = createContext();

export function AuthProvider2({ children }) {
  const [isLogin, setIsLogin] = useState(false); 
  // 로그인 상태를 토글하는 함수
  const toggleLogin = () => setIsLogin((prev) => !prev); 

  return (
    // {children}은 AuthProvider를 감싸는 JSX 안에 넣은 자식 요소를 표시합니다. 
    // React는 그 자식 요소들을 children이라는 prop으로 전달합니다.

    <AuthContext.Provider value={{ isLogin, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
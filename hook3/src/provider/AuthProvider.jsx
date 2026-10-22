
// Context로 isLogin과 toggleLogin 함수 제공

import { createContext, useState } from "react";

export const AuthContext = createContext();

// 자식 컴포넌트에서 로그인 상태 표시 및 토글
const AuthProvider = ({children}) => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleLogin = () => setIsLogin(prev => !prev);

  return(
    <div>
      <AuthContext.Provider value={{isLogin, toggleLogin}}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider; 
import { createContext, useContext } from 'react';
import UserChild from './UserChild';

// UserContext를 생성합니다. 기본값은 빈 객체입니다.
export const UserContext = createContext({});

const User = () => {
  // user 데이터를 정의합니다.
  const user = {
    name: "이순신",
    age: 45,
  };

  return (
    <div className='user'>
      <h2>User 컴포넌트입니다.</h2>
      {/* UserContext.Provider로 감싸서 user 값을 
                하위 컴포넌트에 제공합니다 */}
      <UserContext.Provider value={user}>
        <UserChild />
      </UserContext.Provider>
    </div>
  );
}

export default User;


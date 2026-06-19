import { useContext } from 'react';
import UserGrandChild from './UserGrandChild';

const UserChild = () => {
  
  return (
    <div className='user-child'>
      <h3>UserChild 컴포넌트입니다.</h3>
      <UserGrandChild />
    </div>
  );
}

export default UserChild;


import { Link, useNavigate } from "react-router-dom"

const Header = ({ isLoggedIn, userId, onLogout }) => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <Link to="/">Home</Link>
      <Link to="/products">상품 목록</Link>
      <Link to="/add-product">상품 등록</Link>
      {isLoggedIn ? (
        <div className="header-user">
          <span>{userId}님</span>
          <button 
            className="btn-logout"
            onClick={() => { onLogout(); navigate('/signin'); }}
          >
            로그아웃
          </button>
        </div>
      ) : (
        <Link to="/signin">로그인</Link>
      )}
    </header>
  )
}

export default Header


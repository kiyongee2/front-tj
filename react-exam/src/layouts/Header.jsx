import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Header = () => {
  const { totalCount } = useCart(); // useCart 커스텀 훅을 통해 totalCount를 가져옴

  return(
    <div className="header">
      <h1><Link to='/'>SPACE SHOP</Link></h1>
      <nav>
        <Link to='/'>상품 목록</Link>
        <Link to='/notice'>공지 사항</Link>
        <Link to='/cart'>장바구니({totalCount})</Link>
      </nav>
    </div>
  )
}

export default Header;
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { totalCount } = useCart();
  return (
    <header className="header">
      <h1><Link to="/">SPACE SHOP</Link></h1>
      <nav>
        <Link to="/">상품목록</Link>
        <Link to="/notice">공지사항</Link>
        <Link to="/cart">장바구니 ({totalCount})</Link>
      </nav>
    </header>
  );
}


import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <header className="header">
        <Link to="/">Home</Link>
        <Link to="/products">상품 목록</Link>
        <Link to="/new-product">상품 등록</Link>
      </header>
    </header>
  )
}

export default Header
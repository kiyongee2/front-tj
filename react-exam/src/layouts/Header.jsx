import { Link } from "react-router-dom";

const Header = () => {

  return(
    <div className="header">
      <h1><Link to='/'>SPACE SHOP</Link></h1>
      <nav>
        <Link to='/'>상품 목록</Link>
        <Link to='/notice'>공지 사항</Link>
      </nav>
    </div>
  )
}

export default Header;
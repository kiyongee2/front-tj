import { Link } from "react-router-dom";

const Header = () => {
  return(
    <div className="header">
      {/* 라우팅하기전 npm install react-router-dom 설치 */}
      <Link to="/">Home</Link>
      <Link to="/info">Info</Link>
      <Link to="/state">State</Link>
    </div>
  );
}
export default Header;
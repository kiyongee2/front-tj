import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/redux-app">Counter</NavLink>
      </nav>
    </header>
  )
}

export default Header
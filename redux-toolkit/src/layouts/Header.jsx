
import { NavLink, Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to="/counter">Counter</NavLink>
        <NavLink to="/bank">Bank</NavLink>
        <NavLink to="/todos">Todos</NavLink>
      </nav>
    </header>
  )
}

export default Header


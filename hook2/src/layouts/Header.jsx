import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/counter-reducer">CounterReducer</Link>
        <Link to="/bank-reducer">BankReducer</Link>
        <Link to="/bank-reducer2">BankReducer2</Link>
        <Link to="/theme-context">ThemeContext</Link>
        {/* <Link to="/parent-props">ParentProps</Link> */}
        {/* <Link to="/user-context">UserContext</Link> */}
        <Link to="/redux-example">ReduxExample</Link>
      </nav>
    </header>
  );
}

export default Header;
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav>
        {/* <Link to='/useref-count'>Counter</Link>
        <Link to='/useref-focus'>InputFocus</Link>
        <Link to='/memo-callback'>UseCallbackExample</Link> */}
        {/* <Link to="/counter-reducer">CounterReducer</Link>
        <Link to="/bank-reducer">BankReducer</Link> */}
        {/* <Link to="/bank-reducer2">BankReducer2</Link> */}
        {/* <Link to="/theme-context">ThemeContext</Link> */}
        {/* <Link to='/theme-parent'>ParentTheme</Link> */}
        {/* <Link to="/user-context">UserContext</Link> */}
        {/* <Link to="/redux-example">ReduxExample</Link> */}

        {/* 리덕스 툴킷 */}
        <Link to='/counter'>Counter</Link>
        <Link to='/bank'>Bank</Link>
      </nav>
    </header>
  );
}

export default Header;
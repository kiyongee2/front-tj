
import './App.css'
import Child from './context/ChildTheme';
import { ThemeContext } from './context/ParentTheme';
import ParentProps from './props/ParentProps';
import ParentTheme from './context/ParentTheme';
import User from './context/User';
import CounterReducer from './reducer/CounterReducer';
import Counter from './ref/Counter';
import InputFocus from './ref/InputFocus';

function App() {

  return (
    <>
      <section className="app">
        {/* <CounterReducer /> */}
        {/* <Counter /> */}
        <InputFocus />

        {/* <ThemeContext.Provider value="dark">
          <Child />
        </ThemeContext.Provider> */}

        {/* <ParentProps /> */}
        {/* <ParentTheme /> */}
        {/* <User /> */}
      </section>
    </>
    )
}

export default App

import './App.css'
import Car from './components/Car'
import Clock from './components/Clock'
import Drinks from './components/Drinks'
import Drinks2 from './components/Drinks2'
import InputValue from './test/InputValue'
import Like from './test/Like'
import Loading from './test/Loading'
import MapTest from './test/MapTest'
import User from './users/User'

function App() {

  return (
    <>
      <section className="app">
        {/* <Car /> */}
        {/* <Drinks /> */}
        {/* <Drinks2 /> */}
        {/* <Clock /> */}
        {/* <User /> */}
        <Like />
        <InputValue />
        <Loading />
        <MapTest />
      </section>
    </>
  )
}

export default App

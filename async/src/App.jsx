import { useState } from 'react'
import './App.css'
import FetchExample from './fetch_ex/FetchExample'
import FetchExample2 from './fetch_ex/FetchExample2'
import AxiosGet from './axios_ex/AxiosGet'
import AxiosGetById from './axios_ex/AxiosGetById'
import AxiosPost from './axios_ex/AxiosPost'
import AxiosPut from './axios_ex/AxiosPut'
import AxiosDelete from './axios_ex/AxiosDelete'
import FetchGet from './fetch_ex/FetchGet'
import FetchGetById from './fetch_ex/FetchGetById'

function App() {

  return (
    <>
      {/* <FetchGet /> */}
      <FetchGetById id={2} />
      {/* <FetchExample /> */}
      {/* <FetchExample2 id={1} /> */}
      {/* <AxiosGet /> */}
      {/* <AxiosGetById id={200} /> */}
      {/* <AxiosPost /> */}
      {/* <AxiosPut /> */}
      {/* <AxiosDelete /> */}
    </>
  )
}

export default App


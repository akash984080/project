import React from 'react'
import {RouteLayout} from './Routes/RouteLayout'
import {Header,Footer} from './components/Index'
const App = () => {
  return (
    <div >
      <Header/>
      <RouteLayout/>
      <Footer/>
    </div>
  )
}

export default App
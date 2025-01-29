import React from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import MainCircle from './components/MainCircle'
import Header from './components/Header'
const App = () => {
  return (
    <div className='w-full h-screen relative overflow-x-hidden'>
      <Loader/>
      <MainCircle/>
      <div className='w-full h-screen relative'>
        <Navbar/>
        <Header/>
      </div>
    </div>
  )
}

export default App
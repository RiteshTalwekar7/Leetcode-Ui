import './App.css'
import { useState } from 'react'
import Sidebar from './Components/Sidebar'
import FavouritePanel from './Components/MainContent'

function App() {
  return (
    <>
      <div className='bg-[#1a1a1a] h-screen flex '>
        <div className='w-3xs bg-[#333333]'>
          <Sidebar />
        </div>
        <div className='w-full ml-8 mt-5'>
          <FavouritePanel />
        </div>
      </div>
    </>
  )
}

export default App

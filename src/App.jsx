import React from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Admin_SideBar from './components/Admin_sideBar'
import Admin_Header from './components/Admin_header'

function App() {


  return (
    <>
    <div className='w-full h-auto background-color text-color flex'>
      <div className='w-[22%] h-screen overflow-auto background-color hidden md:block'>
        <Admin_SideBar/>
      </div>
      <div className='w-full md:w-[78%] h-auto'>
        <Admin_Header/>
        <div className='w-full h-auto p-5'>
            <Outlet/>
        </div>
      </div>
    </div>
    </>
  )
}

export default App

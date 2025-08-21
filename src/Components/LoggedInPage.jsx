import React from 'react'
import Header from './Header';
// import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
const LoggedInPage = () => {
  // const userInfo = useSelector((state) => state.loginInfo.info);
  // const data=JSON.stringify(userInfo)
  return (
    <div className="h-screen w-screen bg-gradient-to-tl from-gray-300 to-white-500"><Header/>
    <Outlet/>
    </div>
  )
}

export default LoggedInPage
import React from 'react'
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
const Header = () => {
  const userInfo = useSelector((state) => state.loginInfo.info);
  const data=userInfo 

  return (
    <div >
      {/* Header */}
      <div className="flex justify-between ">
        <div className='w-1/6'>
          <h1 className="text-5xl pt-9 pl-5 font-bold text-black">CONNECTion#</h1>
        </div>

        <div className='w-4/6' >
          <ul  className='flex justify-evenly m-10 pt-2 font-mono font-extrabold text-xl  duration-500 cursor-pointer' >
           <Link to="userProfile"><li class=" cursor-pointer  transition-transform duration-200  hover:scale-110">
             My Profile
               </li></Link>
            <Link to="/updateProfile"><li className='cursor-pointer  transition-transform duration-200  hover:scale-110'>
              Update Profile
            </li></Link>
            <Link to="/connections"><li className='cursor-pointer  transition-transform duration-200  hover:scale-110'>
              Connections
            </li></Link>
            <Link to="/feed"><li className='cursor-pointer  transition-transform duration-200  hover:scale-110'>
              Feed
            </li></Link>
            <Link to="/messages"><li className='cursor-pointer  transition-transform duration-200  hover:scale-110'>
              Messages
            </li></Link>

            <li className='flex items-center  ' >
              <img className='w-[70px] h-auto pt-0 rounded-full ' src={data.photoUrl} alt="" />
              <h3 className='font-normal font-bold text-lg'>hello {data.firstName}</h3>
            </li>
          </ul>
        </div>
        
      </div>
      
      </div>
  )
}

export default Header
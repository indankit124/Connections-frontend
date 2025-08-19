import React from 'react'
import { useSelector } from 'react-redux';
 
const UserProfile = () => {
    const userInfo = useSelector((state) => state.loginInfo.info);
    const data=userInfo


  return (
    <div className=''>


      <div className='bg-slate-50 w-[500px] h-auto pb-[20px] pt-[10px] rounded-3xl ml-10 mt-5 '>


        <div className='bg-white-700 rounded-3xl justify-center flex'>
          <img className='w-[280px] rounded-full  ' src={data.photoUrl} alt="user profile"  />
        </div>
        
        
        <div className='flex m-3'>
          <div className='mt-5 ml-2'>
            <h1>My Profile</h1>
          </div>
          <div className='m-5'>
            <h2>Account Created - {data.createdAt}</h2>
            <h2>Last Updated - {data.updatedAt}</h2>
          </div>
        </div>
        <div className='m-3'>
          <h1>First Name - {data.firstName}</h1>
          <h1>Last Name - {data.lastName}</h1>
           <h1>Email - {data.emailId}</h1>
        </div>
        <button  className='bg-gradient-to-tl ml-[210px]  from-red-500 to-pink-400 p-2 rounded-3xl hover:scale-105 duration-700'>Edit Profile</button>



      </div>

      <div>
       

      </div>
      </div>
  )
}

export default UserProfile;
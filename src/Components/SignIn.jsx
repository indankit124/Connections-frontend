import React from 'react'
import SignUp from './SignUp'
import signin from '../../resourses/signin.png';

 const SignIn = () => {
  

  return (
    <div className="flex justify-between ">
       

       
      <div className='w-1/2  bg-gradient-to-tl from-blue-400 to-white '>
        <div>
        <h1 className="text-5xl pt-9 pl-5 font-bold text-black">CONNECTion#</h1>
        
      </div>
        
     
        {/* Image Section */}
        <div className="my-[72px] mx-[100px]">
          <img
            src={signin}
            alt="Networking illustration"
            className="rounded-3xl shadow-lg object-cover w-[500px] "
          />
        </div>
        
        </div>


      <div className='w-1/2'>
        <div className='pl-48'>
       
        <h2 className="text-4xl font-mono pt-9 pr-5 font-bold text-black">
          Make_connections_beyond_work
        </h2>
      </div >
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-md my-[150px] mx-[150px] ">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign In</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="w-full py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
            Sign In
          </button>
        </form>
        <p className="text-sm text-center text-gray-500" >
          Don't have an account?{' '}
         
            Sign Up
          
        </p>
      </div>
    </div>
      </div>
    
  )
}


export default SignIn
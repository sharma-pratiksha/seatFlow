import React from 'react'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className='flex justify-center mt-25'>
      <div className='bg-white w-[30%] h-110 flex flex-col  items-center rounded-4xl shadow-2xl'>
        <h3 className='font-semibold mt-2'>Welcome Back</h3>
        <h6 className='text-gray-500!'>Login to your account</h6>
        <form className='w-full space-y-4 mt-6 px-8'>
            {/* userName */}
            <div className='flex flex-col relative'>
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2  text-gray-400" />
            <input placeholder='Enter username'
            type='text'
            className='w-full border border-gray-300 rounded-lg pl-11 pr-4 outline-none focus:border-blue-500! py-2 '
            
            />
            </div>

            {/* email */}
            <div className='relative'>
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder='Enter email'
            type='email'
            className='w-full border border-gray-300 rounded-lg pl-11 py-2 pr-4 outline-none focus:border-blue-500!'
            />
            </div>

            {/* password */}
            <div className='relative'>
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder='Enter password'
            type='password'
            className='w-full border border-gray-300 rounded-lg pl-11 py-2 outline-none focus:border-blue-500!'
            />
            </div>
            <button
            type='submit' className='bg-blue-600 w-full text-white py-2 rounded-lg! hover:bg-blue-700 transition'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

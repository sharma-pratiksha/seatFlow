import {useState} from 'react'
import {Link} from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";


const Login = () => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleUserName = (event) => {
        setUserName(event.target.value)
    }
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }

  return (
    <div className='flex justify-center items-center min-h-screen px-4 py-8'>
      <div className='bg-white w-full max-w-md p-6 sm:p-8  flex flex-col  items-center rounded-4xl shadow-2xl'>
        <h3 className='font-semibold mt-2'>Welcome Back</h3>
        <h6 className='text-gray-500!'>Login to your account</h6>
        <form className='w-full space-y-4 mt-6 '>
            {/* userName */}
            <div className='flex flex-col relative'>
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2  text-gray-400" />
            <input placeholder='Enter username'
            type='text'
            value={userName}
            onChange={handleUserName}
            className='w-full border border-gray-300 rounded-lg pl-11 pr-4 outline-none focus:border-blue-500! py-2 '
            
            />
            </div>

            {/* email */}
            <div className='relative'>
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder='Enter email'
            type='email'
            value={email}
            onChange={handleEmail}
            className='w-full border border-gray-300 rounded-lg pl-11 py-2 pr-4 outline-none focus:border-blue-500!'
            />
            </div>

            {/* password */}
            <div className='relative'>
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder='Enter password'
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePassword}
            className='w-full border border-gray-300 rounded-lg pl-11 py-2 pr-11 outline-none focus:border-blue-500!'
            />
            <button 
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>
            </div>
            <button
            type='submit' className='bg-blue-600 w-full text-white py-2 rounded-lg! hover:bg-blue-700 transition'>Login</button>
        </form>
        <div 
        className='mt-4'
        >Don't have an account?
            <Link
            className='no-underline!'
            to='/signup'>Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login

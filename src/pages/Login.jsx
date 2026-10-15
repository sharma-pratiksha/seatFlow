import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock, FaEyeSlash, FaEye } from "react-icons/fa";
import {useFormik} from 'formik'

 const validate = values => {
   const errors = {};
 
   if (!values.password) {
     errors.password = 'Required';
   } else if (values.password.length < 8) {
     errors.password = 'Must be 8 characters';
   }
 
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
 
   return errors;
 }


const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate,

onSubmit: async (values, { resetForm }) => {
  try {
    const response = await fetch(
      "http://localhost:5000/signup/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include",
        body: JSON.stringify({
          email: values.email,
          password: values.password
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Invalid email or password");
      return;
    }

    alert(data.message);
    console.log("Logged-in user:", data.user);

    resetForm();
    navigate("/");
  } catch (error) {
    console.error("Login error:", error);
    alert("Unable to connect to server");
  }
}


    })
    const [showPassword, setShowPassword] = useState(false);
     const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center min-h-screen px-4 py-8'>
      <div className='bg-white w-full max-w-md p-6 sm:p-8  flex flex-col  items-center rounded-4xl shadow-2xl'>
        <h3 className='font-semibold mt-2'>Welcome Back</h3>
        <h6 className='text-gray-500!'>Login to your account</h6>
        <form 
        onSubmit={formik.handleSubmit}
        className='w-full space-y-4 mt-6 '>

            {/* email */}
            <div className='relative'>
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder='Enter email'
            type='email'
            value={formik.values.email}
            name='email'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full border border-gray-300 rounded-lg pl-11 py-2 pr-4 outline-none focus:border-blue-500! ${formik.touched.email && formik.errors.email ? "border-red-500!" : "border-gray-300!"}`}
            />
            </div>
            {formik.touched.email && formik.errors.email && (<p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>)}

            {/* password */}
            <div className='relative'>
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder='Enter password'
            type={showPassword ? "text" : "password"}
            value={formik.values.password}
            name='password'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={`w-full border border-gray-300 rounded-lg pl-11 py-2 pr-11 outline-none focus:border-blue-500! ${formik.touched.password && formik.errors.password ? "border-red-500! " : "border-gray-300!"}`}
            />
            <button 
            type='button'
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer"
            >
                {showPassword ? <FaEyeSlash/> : <FaEye/>}
            </button>
            </div>
                {formik.touched.password && formik.errors.password && (<p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>)}
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

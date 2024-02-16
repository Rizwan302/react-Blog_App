import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice';
import blog from '../img/blog.png'



export default function Signup() {
  const navigate = useNavigate()
  const [error, setError] = useState("")
  const dispatch = useDispatch()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await authService.createAccount(data);
      console.log(userData)
      
      if (!userData) {
        setError("Invalid email or password")
      }
      else{
        const userData = await authService.getCurrentUser();
        console.log(userData)
        if (userData) {
          dispatch(login(userData));
          console.log(userData)
          navigate("/")
        }
      }
    }
    catch (error) {
      const errorMessage = typeof error === "string" ? error : error;
      setError(errorMessage)
    }
  };





  return (
    <div className="flex items-center justify-center">
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
        
          <img src={blog} className=' w-14 h-14 rounded-full border border-red-500 border-spacing-8' alt="" />
         
        </div>

        <div className="">
        
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit}>
        <div className='space-y-5'>
        
          <input type="text" name="name" placeholder="name" className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full my-3' onChange={handleInputChange} value={data.name} />
          <input type="email" name="email" placeholder="email" className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full my-3' onChange={handleInputChange} value={data.email} />
          <input type="password" name="password" placeholder="password" className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full my-3' onChange={handleInputChange} value={data.password} />
          <button type="submit" className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-20 hover:bg-blue-700'>Create Account</button>
          </div>
        </form>


      </div>
    </div>
  )
}

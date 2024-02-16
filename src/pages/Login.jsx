import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import authService from '../appwrite/auth';
import blog from '../img/blog.png'



export default function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("");
  const [data, setData] = useState({
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
      const session = await authService.login(data);
      if (!session) {
        setError("Invalid email or password")
      }
      else {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData))
          navigate("/")
        }
      }
    } catch (error) {
      const errorMessage = typeof error === "string" ? error : "An error occurred";
      setError(errorMessage)
    }
  }

  return (
    <div className='flex items-center justify-center w-full'>
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
        <img src={blog} className=' w-14 h-14 rounded-full border border-red-500 border-spacing-8' alt="" />
        </div>

        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}


        <form onSubmit={handleSubmit}>
        <div className='space-y-5'>
          <input type="email" name="email" placeholder="Enter your email" className='px-3 py-2 my-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full' onChange={handleInputChange} value={data.email} />
          <input type="password" name="password" placeholder="Enter your Password" className='px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full my-2' onChange={handleInputChange} value={data.password} />
          <button type='submit' className='w-full bg-blue-500 text-white px-4 py-2 rounded-lg mt-20 hover:bg-blue-700'>Sign in</button>
          </div>
        </form>


      </div>
    </div>
  )
}

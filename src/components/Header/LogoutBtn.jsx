import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import authService from '../../appwrite/auth';
import { logout } from '../../store/authSlice';

export default function LogoutBtn() {
  const dispatch = useDispatch();

  const logoutHandle = async () => {
    authService.logout()
      .then(() => {
        dispatch(logout())
      })
  }
  return (
    <button
      className='w-14 h-14 border p-2 rounded-full border-white bg-blue-700 font-serif text-white items-center flex text-[12px]'
      onClick={logoutHandle}>
      Logout
    </button>
  )
}

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
      className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
      onClick={logoutHandle}>
      Logout
    </button>
  )
}

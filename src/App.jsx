import { useEffect, useState } from 'react'
import './App.css'
import { Header, Footer } from './components';
import { useDispatch } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
import authService from './appwrite/auth'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();


  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
        if (userData) {
          dispatch(login(userData))
        }
        else {
          dispatch(logout(userData))
        }
      })
      .finally(() => setLoading(false))
  }, []);



  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        TODO:  <Outlet/>
        </main>
        <Footer />
      </div>
    </div>
  )
   
  :
    (
      <div>
        <h1>Logout</h1>
      </div>
    )
}

export default App

import { useEffect, useState } from 'react'
import './App.css'
import { Header, Footer } from './components';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './store/authSlice';
import { Outlet } from 'react-router-dom';
import authService from './appwrite/auth'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch();
  const userTheme = useSelector(state => state.theme);


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
    <div className={`min-h-screen flex flex-wrap content-between  ${userTheme.themeColor? `bg-[#e2e8f0] text-black`: `bg-[#0f172a] text-[#e2e8f0]`}`} >
      <div className='w-full block'>
        <Header />
        <main>
        <Outlet/>
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

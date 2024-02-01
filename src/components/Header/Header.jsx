import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogoutBtn, Container } from '../index'

export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();


  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ]
  return (
    <header className='py-3 shadow bg-sky-800'>
      <Container>
        <nav className='flex '>
          <div className="w-1/5 px-2 flex items-center justify-center">
            <Link to="/">
              <h1 className=' font-semibold font-serif'>Logo</h1>
            </Link>
          </div>

          <ul className='flex w-3/5 justify-between items-center text-lg font-normal  font-serif'>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button onClick={() => navigate(item.slug)}>{item.name}</button>
                </li>
              ) : null)}
            {
              authStatus && (
                <LogoutBtn />
              )
            }
          </ul>
        </nav>
      </Container>
    </header>
  )
}

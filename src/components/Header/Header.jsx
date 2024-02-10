import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { LogoutBtn, Container } from '../index';
import { slug } from '../../store/userSlice.js';
import blog from '../../img/blog.png'
import {
  Collapse,
  Dropdown,
  Ripple,
  initTE,
} from "tw-elements";


export default function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [findSlug, setFindSlug] = useState('')
  const dispatch = useDispatch()


  const handleNavigation = (path) => {
    setFindSlug(path)
    navigate(path);
  };

  useEffect(() => {
    dispatch(slug(findSlug));
    initTE({ Collapse, Dropdown, Ripple });
  }, [findSlug]);

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "News",
      slug: "/news",
      active: authStatus,
    },
    {
      name: "Business",
      slug: "/business",
      active: authStatus,
    },

    {
      name: "Food",
      slug: "/food",
      active: authStatus,
    },
    {
      name: "Travel",
      slug: "/travel",
      active: authStatus,
    },
    {
      name: "Infographic",
      slug: "/infographic",
      active: authStatus,
    },
    {
      name: "DIY",
      slug: "/diy",
      active: authStatus,
    },

  ]
  const navBusItems = [
    {
      name: 'Personal',
      slug: "/personal",
      active: true
    },
    {
      name: 'Music',
      slug: "/music",
      active: true
    },
    {
      name: 'Movies',
      slug: "/movies",
      active: true
    },
    {
      name: "Niche",
      slug: "/niche",
      active: authStatus,
    },
    {
      name: "Finance",
      slug: "/finance",
      active: authStatus,
    },
    {
      name: "Fashion",
      slug: "/fashion",
      active: authStatus,
    },
    {
      name: "Media",
      slug: "/media",
      active: authStatus,
    },
    {
      name: "Case study",
      slug: "/casestudy",
      active: authStatus,
    },
    {
      name: "Fitness",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Listicles",
      slug: "/listicles",
      active: authStatus,
    },
    {
      name: "Affiliate",
      slug: "/affiliate",
      active: authStatus,
    },
    {
      name: "Infographic",
      slug: "/infographic",
      active: authStatus,
    },
    {
      name: "Parenting",
      slug: "/parenting",
      active: authStatus,
    },
    {
      name: "Personal stories",
      slug: "/personalstories",
      active: authStatus,
    },

  ]
  const navItemsSec = [

    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },

  ]
  const navItemswrite = [

    {
      name: "Write",
      slug: "/add-post",
      active: authStatus,
    }

  ]
  return (
    <>
      <header className=''>
        <Container>

          <nav
            className="flex-no-wrap relative flex w-full items-center justify-between  py-2 shadow-md shadow-black/5 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 bg-sky-600 py-2">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
              {/* <!-- Hamburger button for mobile view --> */}


              {/* <!-- Collapsible navigation container --> */}
              <div className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto">

                <img
                  src={blog}
                  className='w-14 h-14 rounded-full '
                  alt="TE Logo"
                  loading="lazy" />

              </div>
              <div
                className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
                id="navbarSupportedContent1"
                data-te-collapse-item>
                {/* <!-- Logo --> */}

                {/* <!-- Left navigation links --> */}
                <ul
                  className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
                  data-te-navbar-nav-ref>
                  {navItems.map((item) =>
                  (
                    <li key={item.name} className='mb-4 lg:mb-0 lg:pr-2' >
                      <a onClick={() => handleNavigation(item.slug)} className='text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer font-serif text-lg' slug={item.slug}>{item.name}</a>
                    </li>
                  ))}

                  <li className="static" data-te-nav-item-ref data-te-dropdown-ref>
                    <a
                      className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400 cursor-pointer font-serif text-xl flex items-center"
                      href="#"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                      type="button"
                      id="dropdownMenuButtonX"
                      data-te-dropdown-toggle-ref
                      aria-expanded="false"
                      data-te-nav-link-ref
                    >More
                      <span className="ml-0 w-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="h-5 w-5">
                          <path
                            fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                        </svg>
                      </span>
                    </a>
                    <div
                      className="absolute  top-full z-[1000] mt-0 hidden w-80 h-96 overflow-auto border-none bg-white bg-clip-padding text-neutral-600 shadow-lg dark:bg-neutral-700 dark:text-neutral-200 [&[data-te-dropdown-show]]:block"
                      aria-labelledby="dropdownMenuButtonX"
                      data-te-dropdown-menu-ref>
                      <div className="px-6 py-5 lg:px-8">
                        <div className=" gap-6 md:grid-cols-2 lg:grid-cols-4">
                          <div className='grid'>
                            {navBusItems.map((item) => (
                              <a
                              onClick={() => handleNavigation(item.slug)}
                                aria-current="true"
                                key={item.slug}
                                className="block w-full border-b border-neutral-200 px-6 py-2 transition duration-150 ease-in-out hover:bg-neutral-50 hover:text-neutral-700 dark:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                              >{item.name}</a
                              >
                            ))}

                          </div>



                        </div>
                      </div>
                    </div>
                  </li>


                </ul>
              </div>

              {/* <!-- Right elements --> */}
              <div className="relative flex items-center gap-2">

                <div
                  className="relative"
                  data-te-dropdown-ref
                  data-te-dropdown-alignment="end">
                  {
                    authStatus ? (
                      navItemswrite.map((item) => (
                        <button key={item.name} onClick={() => navigate(item.slug)} className='w-14 h-14 border p-2 rounded-full border-white bg-green-700 font-serif text-white items-center flex text-xs justify-center text-center'>
                          {item.name}
                        </button>
                      ))
                    ) : null
                  }
                </div>
                <div
                  className="relative"
                  data-te-dropdown-ref
                  data-te-dropdown-alignment="end">


                  {
                    authStatus ? (
                      <LogoutBtn />
                    ) : (
                      navItemsSec.map((item) => (
                        <button key={item.name} onClick={() => navigate(item.slug)} className='w-14 h-14 border p-2 rounded-full border-white bg-green-700 font-serif text-white items-center flex text-xs justify-center'>
                          {item.name}
                        </button>
                      ))
                    )
                  }

                </div>
              </div>
            </div>
          </nav>

        </Container>
      </header>

    </>
  )
}



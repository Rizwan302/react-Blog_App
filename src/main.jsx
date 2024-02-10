import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import store from './store/store.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AuthLayout from './components/AuthLayout.jsx';
import Login from './pages/Login.jsx';
import Post from './pages/Post.jsx';
import Signup from './pages/Signup.jsx';
import AllPosts from './pages/AllPosts.jsx'
import AddPost from './pages/AddPost.jsx'
import EditPost from './pages/EditPost.jsx'
import dotenv from 'dotenv';
import ShowBlog from './pages/ShowBlog.jsx';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/login',
        element: (
          <AuthLayout authentication={true}>
            <Login />
          </AuthLayout>

        )
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      
      {
        path: "/news",
        element: (
          <AuthLayout authentication>
            {" "}
            <AllPosts />
           </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            {" "}
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/business",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/food",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/travel",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/infographic",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/diy",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/personal",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/music",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/movies",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/niche",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/finance",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/media",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/casestudy",
        element: (
          <AuthLayout authentication>
            {" "}
            <ShowBlog />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
             {" "}
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
    },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </Provider>,
)

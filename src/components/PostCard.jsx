import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

export default function PostCard({ $id, title, blogimg, content }) {
  return (
    <Link to={`/post/${$id}`}>

      <div className="card overflow-hidden  transform transition duration-500 lg:w-[28rem] md:w-[25rem] border border-success  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 rounded-lg m-3">
        <img className="h-[15rem] w-full object-cover rounded-t-lg" src={appwriteService.getFilePreview(blogimg)} alt="Mountain" />
        <div className="px-5 pt-4">
          <div className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{title}</div>
          <p className="text-gray-700 text-base">
          </p>
        </div>
        <div className="px-5 my-1 ">
          <p className="hover:text-info-600 text-base text-info">
          author
          </p>
        </div>
        <div className="px-5 pt-2 pb-2 flex items-center justify-between">
          <div className="flex mr-6 text-sm text-gray-200">
            <span className='mb-4 text-base text-neutral-600 dark:text-neutral-200'>Feb 5, 2024</span>
          </div>
          <div className=" flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 fill-red-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              />
            </svg>

            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

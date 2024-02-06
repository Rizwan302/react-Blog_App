import React from 'react'
import { Link } from 'react-router-dom'
import appwriteService from '../appwrite/config'

export default function PostCard({ $id, title, blogimg, content }) {
  return (
    <Link to={`/post/${$id}`}>
      {/* <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
            <img src={appwriteService.getFilePreview(blogimg)} alt={title} className=" rounded-lg block h-auto w-full" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div> */}

      <div class="p-5 flex flex-wrap justify-center gap-2 mx-0">
        <div class="card rounded overflow-hidden shadow-lg transform transition duration-500 hover:bg-blue-100 hover:scale-105">
          <img class="h-[15rem] w-full object-cover" src={appwriteService.getFilePreview(blogimg)} alt="Mountain" />
          <div class="px-5 py-4">
            <div class="font-bold text-xl mb-2">{title}</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div class="px-6 pt-1 pb-2 flex">
            <div class="flex mr-6 text-sm text-gray-200">
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0zm12 8a8 8 0 100-16v8H4a8 8 0 0010 8z" clip-rule="evenodd"></path></svg>
              <span>Feb 5, 2024</span>
            </div>
            <div className="">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
        </div>
      </div>

      


    </Link>
  )
}

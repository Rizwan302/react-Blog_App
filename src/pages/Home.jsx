import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container } from '../components/index'
import PostCard from '../components/PostCard'


export default function Home() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (posts.length === 0) {
    return (
      <div className="">
        <Container>
          <div className="flex">
            <div className="">
              <h1>Login to read post</h1>
            </div>
          </div>
        </Container>
      </div>
    )
  }
  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post}/>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

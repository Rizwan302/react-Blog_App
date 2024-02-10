import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import {Container}  from '../components/index';
import PostCard from '../components/PostCard'

export default function AllPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts([])
      .then((post) => {
        if (post) {
          setPosts(post.documents)
        }
      })
  }, [])

  return(
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap justify-start items-start w-full mx-auto'>
          {Array.isArray(posts) && posts.map((post) => (
            <div key={post.$id} className='mx-auto'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

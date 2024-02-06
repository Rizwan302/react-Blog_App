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
          console.log(post)
        }
      })
  }, [])


    const fetchedPosts =  0
      console.log('Fetched posts:', posts.documents);

  

  return(
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {Array.isArray(posts) && posts.map((post) => (
            <div key={post.$id} className='m-0 flex'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container } from '../components/index'
import PostCard from '../components/PostCard'
import CarourseleBar from '../components/CarourseleBar'
import Banner from '../components/Banner'



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
    <div className='w-full py-0 px-5'>
      <Container>

      <Banner/>
      <section class="mb-32 text-center lg:text-left md:px-6">
          <h2 class="mb-12 text-center text-3xl font-bold">
            All Popular Blog
          </h2>

        {/* ==== Card ==== */}
        <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
          {posts.map((post) => (
              <PostCard {...post}/>
          ))}
          </div>
        </section>
      </Container>
    </div>
  )
}

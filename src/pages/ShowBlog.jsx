import React, { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config';
import { Container } from '../components';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';

export default function ShowBlog() {
  const [posts, setPosts] = useState([]);
  const userSlug = useSelector(state => state.user);
  const userSlugTrim = userSlug.userData?.trim().slice(1);
  console.log("post:", userSlugTrim)

  useEffect(() => {
    appwriteService.getPosts([]).
      then((post) => {
        if (post) {
          const find_Result = post.documents.filter(({ blogtype }) => blogtype?.toLowerCase() === userSlugTrim)
          setPosts(find_Result)
        }
      })
  }, [userSlugTrim])
  return (
    <div className='container my-24 mx-auto md:px-6'>
      <Container>
        <section class="mb-32 text-center lg:text-left">
          <h2 class="mb-12 pb-4 text-center text-3xl font-bold">
            All Blogs {userSlugTrim}
          </h2>

          <div class="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
            {/* ===== Card =====*/}

            {posts.length? (posts.map((post) => (
              <PostCard {...post} />
            ))):(
              <h1>Not Blog</h1>
            )}
          </div>
        </section>
      </Container>

    </div>
  )
}

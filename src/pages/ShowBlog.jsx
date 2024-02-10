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
        const find_Result = post.documents.filter(({blogtype})=>blogtype?.toLowerCase() === userSlugTrim)
        console.log("slug trim", find_Result)
          setPosts(find_Result)
        }
      })
  }, [userSlugTrim])
  return (
    <div>

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

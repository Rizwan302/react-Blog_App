import Container from '../components/Container'
import React, { useEffect, useState } from 'react';
import parse from "html-react-parser";
import { useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import appwriteService from '../appwrite/config';

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userid === userData.$id : false;

  useEffect(() => {
    if (slug) {
      console.log('object')
      appwriteService.getPost(slug).
        then((post) => {
          if (post) {
            setPost(post)
            console.log(post)
          }
          else navigate('/')
        })
    } else navigate('/')
  }, [slug, navigate])


  // Delete Post 
  const deletePost = () => {
    appwriteService.deletePost(post.$id)
      .then((status) => {
        if (status) {
          appwriteService.deleteFile(post.blogimg);
          navigate("/")
        }
      })
  }



  return post ? (
    <div className='py-8 flex justify-center bg-cyan-900'>
      <Container>
        <div className="w-[68vw] mx-2">
          <div className="mb-6">
            <h1 className=' text-3xl font-black antialiased font-serif list-disc capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni sint corrupti eius sit sunt velit?</h1>
          </div>
          <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2 h-[55vh]">
            <img src={appwriteService.getFilePreview(post.blogimg)} alt={post.title} className='w-full h-full object-cover' />
          </div>

          <div className="my-2">
            <div class="flex mr-6 text-sm text-gray-200 items-center gap-3 pl-3">
              <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fchemistry.case.edu%2Ftest2%2Fno-user-image%2F&psig=AOvVaw0PN39p1cAC8YzzmPjDRuNL&ust=1707344448070000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCIDO9u3fl4QDFQAAAAAdAAAAABAJ" alt="" className=" w-12 h-12 rounded-full border" />
              <p >Feb 5, 2024</p>
            </div>
          </div>


          <div className="browser-css font-bold font-serif text-lg w-full my-8 px-2">
            {parse(post.content)}
          </div>
        </div>
      </Container>


      <div className="w-[25vw] bg-blue-300 h-auto">
        <Container>
          <div className=" block">
            {isAuthor && (
              <div className="py-6 px-2">
                <Link to={`/edit-post/${post.$id}`}>
                  <button className='bg-green-500 text-white px-4 py-2 rounded-lg w-full my-2 font-serif'>Edit</button>
                </Link>
                <button className='bg-red-500 px-4 py-2 rounded-lg w-full my-2 font-serif' onClick={deletePost}>
                  Delete
                </button>
              </div>
            )}
          </div>
        </Container>
      </div>
    </div>
  ) : null
}

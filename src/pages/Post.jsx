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
    <div className='py-8'>
      <Container>
        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img src={appwriteService.getFilePreview(post.blogimg)} alt={post.title} />
          {/*  */}
          {isAuthor && (
            <div className=" absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <button className='bg-green-500 mr-3'>Edit</button>
              </Link>
              <button className='bg-red-500' onClick={deletePost}>
                Delete
              </button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold"></h1>
        </div>
        <div className="browser-css">
          {parse(post.content)}
        </div>

      </Container>
    </div>
  ) : null
}

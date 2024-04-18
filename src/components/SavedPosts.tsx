import React, { useEffect, useState } from 'react'
import { getAllPosts } from '../services/api/user/apiMethods';
import PostSkeletonUi from './skeletonUI/PostSkeletonUi';
import Post from './Post';

function SavedPosts() {

    const [posts, setPosts] = useState([]); 
    const [users,setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
      try {
        setLoading(true);
        setTimeout(() => {
          getAllPosts()
            .then((response:any) => {
              const postsData = response.data;
              setPosts(postsData); 
              
              console.log(postsData);
            })
            .catch((error) => {
            console.log(error);
            
            })
            .finally(() => {
              setLoading(false);
            });
        }, 2000);
    } catch (error) {
        console.log(error);
        
        }
      }, []);
    
    

  return (
    <div>
        {loading&&(
  <PostSkeletonUi/>
)}
{posts.length > 0 && (
  <div className="posts">
    {posts.map((post:any) => (
      <Post key={post._id} post={post}  />
    ))}
  </div>
)}
    </div>
  )
}

export default SavedPosts
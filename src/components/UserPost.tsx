import { useEffect, useState } from "react";
import PostDetails from "./PostDetails"
import { useDispatch, useSelector } from "react-redux";
import { getUserPost } from "../services/api/user/apiMethods";
import { setUsePosts } from "../utils/context/reducers/authSlice";
import PostDetailsUi from "./skeletonUI/PostDetailsUi";
import { toast } from "sonner";



function UserPost() {

  const dispatch = useDispatch();
  const selectUserPost = (state: any) => state.auth.userPost || [];
  const posts = useSelector(selectUserPost) || [];


  

  const [loading, setLoading] = useState(false);

  const selectUser = (state:any)=>state.auth.user;
  const user = useSelector(selectUser);
  useEffect(() => {
    try {
      setLoading(true);
      setTimeout(() => {
        getUserPost({userId:user._id})
          .then((response: any) => {
           
            dispatch(setUsePosts({ userPost: response.data }));
           
            
         
            
          })
          .catch((error) => {
            toast.error(error.message)
            console.log(error);
          })
          .finally(() => {
            setLoading(false);
          });
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }, [user]);

  return (

    <>

    {loading&&(
      <PostDetailsUi/>
  
    )
      

    }
     
          {posts.length >0 && !loading&&(
          <div className="posts">
            {posts.map((post: any) => (

              <PostDetails  key={post._id} post={post} likesValue={false} commentsValue={false} />
            ))}
          </div>
        )}
      
    </>


  )
}

export default UserPost

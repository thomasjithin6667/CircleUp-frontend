import "./userHome.css";
import AddPost from "../../../components/AddPost";
import UserProfileBar from "../../../components/UserProfileBar";
import Post from "../../../components/Post";
import PeopleCard from "../../../components/PeopleCard";
import { useEffect, useState } from "react";
import { getAllPosts } from "../../../services/api/user/apiMethods";

function UserHome() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]); 

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
    <div className="home-main">
      <div className="hidden lg:block home-section-1" id="mobile-menu-2">
        <UserProfileBar />
      </div>

      <div className="home-section-2">
        <AddPost />

        {posts.length > 0 && (
          <div className="goals">
            {posts.map((post:any) => (
              <Post key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>

      <div className="hidden lg:block home-section-3" id="mobile-menu-2">
        <div className="home-scroll">
          <div className="home-scrollbox">
            <PeopleCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserHome;

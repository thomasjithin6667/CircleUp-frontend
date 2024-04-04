import { useSelector } from "react-redux";
import "../pages/user/userHome/userHome.css"
import {  LocateIcon, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { getUserDetails, getUserPost } from "../services/api/user/apiMethods";




function ViewerBio() {
  const selectUser = (state: any) => state.auth.user;
  const userData = useSelector(selectUser);
  const loggedUserId = userData._id;
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [connections, setConnections] = useState<any>(null);
  const [Post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { userId } = useParams();
  console.log(userId);
  

  useEffect(() => {
    getUserDetails(userId)
      .then((response: any) => {
       
        setUser(response.data.user);
        setConnections(response.data.connections);
        const followers = response.data.connections.connections;
        setIsConnected(followers.includes(loggedUserId));
      })
      .catch((error: any) => {
        toast.error(error.message);
      });
    getUserPost({ userId: userId })
      .then((response: any) => {
        const postsData = response.data;
        setPost(postsData);
        console.log(postsData);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);


  

  return (

    
    <div >
      
{user && (

      <div >

     
      <div className="background w-full h-36 bg-gray-300 mt-7 rounded-t-md" ></div>
      <div className="bio bg-white w-full h-96 rounded-b-md pt-16 px-10">
        <div className="flex justify-between">
        <p  className="text-xs mb-5 text-green-600 font-medium">Online</p>
     
          
        </div>
       
        <div className="flex gap-10">
        <p className="text-sm font-bold">{user.profile?.fullname||user.companyProfile?.companyName}</p>
        <p className="text-xs">{user.username}</p>

        </div>
         <div>

   
        <p className="text-xs  mb-5">{user.profile?.designation || user.companyProfile?.companyType}</p>
        <p className="text-sm font-bold">About </p>
        <p className="text-xs w-1/2">{user.profile?.about||user.companyProfile?.aboutCompany}</p>
        </div>
        <div>
         
          <p className="text-sm font-bold text-green-600 my-5" > {connections.connections.length} Circles </p>
        </div>
        <div className="flex gap-4">
          <button className="text-xs flex  text-green-600 border px-2 py-1 rounded-md border-green-600" >Open to</button>
          <button className="text-xs flex  text-green-600 border px-2 py-1 rounded-md border-green-600" >Add Section</button>
        </div>
      </div>
      <div className="profile-image w-32 h-32 absolute rounded-lg border-4 border-white top-60 left-56">
     <img className="rounded-md w-full h-full" src={user.profileImageUrl} alt="" />
      </div>
      <div className="contact w-full h-40 rounded-md mt-7 bg-white flex flex-col px-10 pt-10 gap-2">
        <p className="text-sm font-bold">Contact Information</p>
        <div className="flex w-full gap-32">
        <div>
          <p className="text-xs font-semibold flex items-center gap-1"><Mail size={15}/> Email</p>
          <p className="text-xs text-gray-500 mt-2">{user.email}</p>
        </div>
        <div>
          <p className="text-xs font-semibold flex items-center gap-1"><Phone size={15}/> Phone</p>
          <p className="text-xs text-gray-500 mt-2">{user.phone}</p>
        </div>
        <div>
          <p  className="text-xs font-semibold flex items-center gap-1"><LocateIcon size={15}/> Location</p>
          <p  className="text-xs text-gray-500 mt-2">{user.profile?.location||user.companyProfile?.companyLocation}</p>
        </div>
        </div>

      </div>
      </div>
)}
    
  
    
  
    </div>



    
  );
}

export default ViewerBio;

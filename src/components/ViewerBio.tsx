import { useSelector } from "react-redux";
import "../pages/user/userHome/userHome.css"
import {  CircleArrowDownIcon, CircleArrowUp, LocateIcon, Mail, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "sonner";
import { UnFollowUser, cancelFollowRequest, followUser, getUserConnection, getUserDetails, getUserPost } from "../services/api/user/apiMethods";




function ViewerBio() {
  const selectUser = (state: any) => state.auth.user;
  const userData = useSelector(selectUser);
  const loggedUserId = userData._id;
  const [isConnected, setIsConnected] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [connections, setConnections] = useState<any>(null);
  const[loggedUserConnections,setLoggedUserConnections] = useState<any>(null);
  const [requested, setRequested] = useState<any>(null);
  const [Post, setPost] = useState([]);
  const [loading, setLoading] = useState(false);
  const { userId } = useParams();


  

  

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

  useEffect(() => {
    try {
      setLoading(true);

        getUserConnection({ userId:loggedUserId })
      .then((response: any) => {
        const connectionData = response.data.connection;
        setLoggedUserConnections(connectionData.connections);
        setRequested(connectionData.requestSent);
        setLoading(false);
   
      })
      .catch((error) => {
        console.log(error.message);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);
  


  const handleUnFollowFromViewProfile = (user:any) => {
    UnFollowUser({userId:loggedUserId, unfollowingUser: user?._id})
      .then((response: any) => {
        toast.error(`Unfollowed User`)
       
        setLoggedUserConnections(response.data.connection.connections)
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  
  const handleFollowFromViewProfile = (followeduserId:string|undefined,followedUserName:string) => {
    followUser({userId:loggedUserId, followingUser: followeduserId })
      .then((response: any) => {
        const connectionData = response.data.connection;
        setRequested(connectionData.requestSent);
        
      
      })
      .catch((error:any) => {
        console.log(error.message);
      });
  };
  
  const handleCancel = (user:any)=>{
    cancelFollowRequest({userId,cancelingUser:user?._id}).then((response:any)=>{
     
        toast.error("Request Cancelled")
        setRequested(response.data.connection.requestSent)
    })
  }
  

  

  return (

    
    <div >
      
{user && (

      <div >

     
      <div className="background w-full h-36 bg-gray-300 mt-7 rounded-t-md" ></div>
      <div className="bio bg-white w-full h-96 rounded-b-md pt-16 px-10">
        <div className="flex justify-between mb-4">
        {!user.isHiring?(
         <p className="text-xs bg-green-600 text-white py-1 mt-1 w-32 rounded-full text-center">Available for work</p>

      ):( <p className="text-xs bg-white border  border-green-600 font-semibold text-green-600 py-1 mt-1 w-32 rounded-full text-center">Recruiting </p>)}

          
     
          
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
        {location.pathname.startsWith('/visit-profile/bio/') && (
  <div>
    {requested?.some((request:any) => request._id === userId) ? (
      <button  onClick={()=>handleCancel(user)} className="text-xs flex gap-1 text-gray-600 font-semibold border px-2 py-1 rounded-md border-gray-600" >
        Requested <CircleArrowDownIcon size={15} />
      </button>
    ) : loggedUserConnections?.some((connection:any) => connection._id === userId) ? (
      <div className="flex gap-2">
           <button onClick={() =>  handleUnFollowFromViewProfile(user)} className="text-xs flex gap-1 text-red-600 font-semibold border px-2 py-1 rounded-md ">
       Circle Down <CircleArrowDownIcon size={15} />
      </button>
      <Link to={`/chat?userId=${user._id}`} className="text-xs flex gap-1 text-green-600 font-semibold border px-2 py-1 rounded-md broder" >
        Message <MessageCircle size={15} />
      </Link>


      </div>
   
    ) : (
      <button onClick={() => handleFollowFromViewProfile(userId, user.username)} className="text-xs flex gap-1 text-green-600 font-semibold border px-2 py-1 rounded-md border-green-600">
        Circle Up <CircleArrowUp size={15} />
      </button>
    )}
  </div>
)}
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

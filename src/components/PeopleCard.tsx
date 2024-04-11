import { CircleArrowUp,CircleCheck,CircleX,CircleArrowDownIcon,Ban, Target} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UnFollowUser, acceptFollowRequest, cancelFollowRequest, rejectFollowRequest } from "../services/api/user/apiMethods";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
function PeopleCard({ user, handleFollow ,updateConnection,updateRequested,updateRequests}: any) {
  
  const selectUser = (state: any) => state.auth.user;
  const currentUser = useSelector(selectUser);
  const userId = currentUser?._id
  const location = useLocation();
  const handleAcceptRequest = (user:any)=>{

    acceptFollowRequest({userId,requestedUser:user?._id}).then((response:any)=>{
      updateRequests(response.data.connection.requests)
   console.log(response.data.connection)
        toast.success("Request Accepted")
    })
}
const handleReject = (user:any)=>{
    rejectFollowRequest({userId,requestedUser:user?._id}).then((response:any)=>{
     
        toast.error("Request Rejected")
        console.log(response.data.connection.requests)
        updateRequests(response.data.connection.requests)
    })
}

const handleCancel = (user:any)=>{
  cancelFollowRequest({userId,cancelingUser:user?._id}).then((response:any)=>{
   
      toast.error("Request Cancelled")
    updateRequested(response.data.connection.requestSent)
  })
}

const handleUnFollow = (user:any) => {
  UnFollowUser({ userId, unfollowingUser: user?._id})
    .then((response: any) => {
      toast.error(`Unfollowed User`)
      console.log(response.data.connection);
      updateConnection(response.data.connection.connections)
    })
    .catch((error) => {
      console.log(error.message);
    });
};




  const navigate=useNavigate()
  return (
    <>
        <div className=" home-recommed-section bg-white flex justify-between px-4 py-4 items-end" >
          <div>
          <img
        className="h-9 w-9 rounded-full border-2 p-.5 mb-3 border-green-600"
        src={user?.profileImageUrl}
        alt="Profile"
      />
          <p className="text-sm font-semibold flex items-center gap-1" > {user?.profile?.fullname||user?.companyProfile?.companyName}{user.isPremium==true&&(<Target color="green" size={15}/>)} </p>
          <p className="text-xs text-gray-400">{user?.profile?.designation||user?.companyProfile?.companyType}</p>
          <p className="text-xs text-green-600 font-medium">{user?.profile?.location||user?.companyProfile?.companyLocation}</p>

          </div>   
       
          <div className="flex gap-2 justify-between">
          <button onClick={()=>{navigate(`/visit-profile/bio/${user?._id}`)}} className="text-xs border px-4 py-1 rounded-md border-green-600">view</button>
           



          {location.pathname === '/people/discover' && (
          <button  onClick={()=>handleFollow(user?._id,user.username)} className="text-xs flex gap-1 text-green-600 font-semibold border px-2 py-1 rounded-md border-green-600">circle up <CircleArrowUp size={15}/> </button>

      )}
      {location.pathname === '/people/connections' && (
          <button  onClick={()=>handleUnFollow(user)} className="text-xs flex gap-1 text-red-600 font-semibold border px-2 py-1 rounded-md border-red-600">circle down <CircleArrowDownIcon size={15}/> </button>

      )}
      {location.pathname === '/people/requests' && (
        <div className="flex gap-2">
                    <button  onClick={()=>handleAcceptRequest(user)} className="text-xs flex gap-1 text-green-600 font-semibold border px-2 py-1 rounded-md border-green-600">Accept <CircleCheck size={15}/> </button>
          <button  onClick={()=>handleReject(user)} className="text-xs flex gap-1 text-red-600 font-semibold border px-2 py-1 rounded-md border-red-600">Reject <CircleX size={15}/> </button>

        </div>
      )}
      {location.pathname === '/people/requested' && (
          <button  onClick={()=>handleCancel(user)} className="text-xs flex gap-1 text-red-600 font-semibold border px-2 py-1 rounded-md border-red-600">Cancel  <Ban size={15}/> </button>
          )}
          </div>
        


        </div>
    

    </>
  )
}

export default PeopleCard



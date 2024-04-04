import { Outlet, useNavigate, useParams } from "react-router-dom"
import Header from "../../../components/Header"
import '../profilePage/profile.css'
import { useState } from "react";


function ViewerProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();


  return (
    <div className="wrapper">
    <Header/>
    <div className=" profile-wrapper px-48   mt-10" style={{backgroundColor:"rgb(234, 233, 233)"}}>
    <div className="border  profile-nav flex items-center justify-center gap-52 bg-white rounded-md" >
      <button onClick={()=>{navigate(`/visit-profile/bio/${userId}`)}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300" type="submit">Profile</button>
      <button onClick={()=>{navigate(`/visit-profile/posts/${userId}`)}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">User Activity</button>
      <button onClick={()=>{navigate(`/visit-profile/connections/${userId}`)}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">User Connections</button>

      <button onClick={()=>{navigate(`/visit-profile/jobs/${userId}`)}}className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">User Jobs</button>


    </div>
    <Outlet />

    
    </div>
    </div>
  )
}

export default ViewerProfile
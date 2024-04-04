import React from 'react'
import PostSkeletonUi from '../../../components/skeletonUI/PostSkeletonUi'
import PeopleCard from "../../../components/PeopleCard"
import {Outlet, useNavigate} from 'react-router-dom';


function JobsHiring() {
  const navigate = useNavigate();
  return (


    <div>

               
      <div className="people-section-2">
        <div className='flex w-full'>
      <div className="border w-2/3 profile-nav flex items-center justify-center gap-20  bg-white rounded-md mx-5" >
      <button onClick={()=>{navigate('/profile/bio')}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300" type="submit">Profile</button>
      <button onClick={()=>{navigate('/profile/user-posts')}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">User Activity</button>
      <button className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">Settings</button>
    
    </div>
    <div className="border w-1/3 profile-nav flex items-center justify-center gap-20  bg-white rounded-md  ms-4" >
     
     </div>
     </div>        
        <div  className="home-scroll">
          <div className="home-scrollbox">

<Outlet/>


          </div>
        </div>
    
      </div>


    </div>
  )
}

export default JobsHiring

import { useEffect, useState } from "react";
import {Outlet, useLocation, useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";
import JobFilterForm from "../../../components/JobFilterForm";


function JobsOpenToWork() {
  const selectUser = (state:any)=>state.auth.user;
  const user = useSelector(selectUser);
  const location = useLocation();
  const navigate = useNavigate();
  const[filterData,setFilterData]=useState<any>({})
  useEffect(() => {
    if (user.isHiring===true) {
      navigate("/jobs/hiring/job-list");
    }
  },[user,  navigate]);
  
  
  return (


    <div>

               
      <div className="home-section-2 ">
      <div className="border  profile-nav flex items-center justify-center gap-20  bg-white rounded-md mt-5 mx-5" >
      <button
            onClick={() => { navigate('/jobs/open-to-work/job-list') }}
            className={`text-xs font-medium text-gray-400 hover:text-white focus:bg-black focus:text-white px-7 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 ${
              location.pathname === '/jobs/open-to-work/job-list' ? 'bg-black text-white' : ''
            }`}
          >
            Job Openings
          </button>
          <button
            onClick={() => { navigate('/jobs/open-to-work/applications') }}
            className={`text-xs font-medium text-gray-400 hover:text-white focus:bg-black focus:text-white px-7 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 ${
              location.pathname === '/jobs/open-to-work/applications' ? 'bg-black text-white' : ''
            }`}
          >
            Applications
          </button>
          <button
            onClick={() => { navigate('/jobs/open-to-work/interviews') }}
            className={`text-xs font-medium text-gray-400 hover:text-white focus:bg-black focus:text-white px-7 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 ${
              location.pathname === '/jobs/open-to-work/interviews' ? 'bg-black text-white' : ''
            }`}
          >
            Interviews
          </button>
    </div>
        
        <div  className="home-scroll">
          <div className="home-scrollbox ">
 
  <Outlet/>


          </div>
        </div>
    
      </div>

      <div className="hidden lg:block home-section-3" id="mobile-menu-2">
      <div className="border  profile-nav flex items-center justify-center gap-20  bg-white rounded-md mt-5 ms-4" >
      <p className="text-xs text-gray-500">Filter Job</p>
    </div>
    
     <div className="ps-4 mt-5">
      
     <JobFilterForm setFilterData={setFilterData}/>

     </div>
   

      
      </div>

    </div>
  )
}

export default JobsOpenToWork
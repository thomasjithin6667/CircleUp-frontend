
import { Outlet, useNavigate } from "react-router-dom"

import "./people.css"

function People() {
     
  const navigate = useNavigate();
  return (
    <div>

   
  <div className="people-section-2 mx-5">
    <div  className="people-scroll">
      <div className="people-scrollbox">
      <div className="border  people-profile-nav flex items-center justify-center gap-20 bg-white rounded-lg " >
      <button onClick={()=>{navigate('/people/discover')}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300" type="submit">Discover</button>
      <button onClick={()=>{navigate('/people/connections')}}  className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">Connections</button>
      <button  onClick={()=>{navigate('/people/requests')}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">Requests</button>
      <button  onClick={()=>{navigate('/people/requested')}} className="text-xs font-medium  text-gray-400 hover:text-white  focus:bg-black  focus:text-white px-7 py-2  rounded-md hover:bg-gray-800  transition-colors duration-300"type="submit">Requested</button>
    </div>
    <Outlet/>
  




      </div>
    </div>

  </div>


  </div>
  )
}

export default People
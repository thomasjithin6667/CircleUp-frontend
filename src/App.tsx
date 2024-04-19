
import {   Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserProfileBar from "./components/UserProfileBar";
import { FilterProvider } from "./utils/context/jobfilterData/FilterContext";


function App() {




  return (
    <>
       
     <FilterProvider>
<div>

      <Header />

      <div className="home-main">
      <div className="hidden lg:block home-section-1" id="mobile-menu-2">
        <UserProfileBar />
      </div>

          <Outlet/>
      </div>
        </div>
        </FilterProvider>
        
  </>
  )
}

export default App



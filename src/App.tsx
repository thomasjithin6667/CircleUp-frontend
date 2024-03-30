
import {   Outlet, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import UserProfileBar from "./components/UserProfileBar";


function App() {
  const selectUser = (state:any)=>state.auth.user;
  const user = useSelector(selectUser);
  const navigate = useNavigate();

   useEffect(() => {
    if (!user ) {
      navigate("/login");
    }
  },[user,  navigate]);



  return (
    <>
       

<div>

      <Header />

      <div className="home-main">
      <div className="hidden lg:block home-section-1" id="mobile-menu-2">
        <UserProfileBar />
      </div>

          <Outlet/>
      </div>
        </div>
        
  </>
  )
}

export default App



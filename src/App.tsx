
import {   Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import { useEffect } from "react";


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
<Toaster
  toastOptions={{
    unstyled: true,
    classNames: {
      error: 'text-red-600 text-xs flex justify-start border border-rounded gap-3 w-80 px-4 py-5 bg-white rounded-md',
      success: 'text-green-600 text-xs flex justify-start border border-rounded gap-3 w-80 px-4 py-5 bg-white rounded-md',
      warning: 'text-gray-300 text-xs flex justify-start border border-rounded gap-3 w-80 px-4 py-5 bg-white rounded-md', 
      info: 'text-black text-xs flex justify-start border border-rounded gap-3 w-80 px-4 py-5 bg-white rounded-md',
    },
  }}
/>
      <Header />

     
          <Outlet/>
        </div>
        
  </>
  )
}

export default App



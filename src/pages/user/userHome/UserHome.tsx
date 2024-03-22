import Header from "../../../components/Header";
import { useDispatch, useStore } from 'react-redux';
import { logout } from "../../../utils/context/reducers/authSlice";
import { useNavigate } from 'react-router-dom';
import "./userHome.css"
import { Bell, Bookmark, Mail,LucideKeySquare } from "lucide-react";
import { useState,useRef } from "react";
import { Formik,Form,Field ,ErrorMessage,useFormik} from 'formik';
import * as Yup from "yup";



function userHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('email')
    navigate('/login')
  };

  const [showModal, setShowModal] = useState(false);

  const handleCreatePostClick = () => {
    setShowModal(true);
  };

  const handleCancelClick = () => {
    setShowModal(false);
  };


  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click(); // Optional chaining (?.) used here
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining (?.) used here
    // Handle the selected file here
    console.log('Selected file:', file);
  };


  const formik = useFormik({
    initialValues: {
      image: ''
    },
    validationSchema: Yup.object({
      image: Yup.mixed().required('Image file required')
    }),
    onSubmit: (values) => {
      // Handle form submission here
      console.log(values);
    }
  });
  return (
    <div>
      <Header />

      <div className="home-main">
        
<div className="home-section-1">
        <div className="home-profile-card bg-white"></div>
    <div className="home-info-card bg-white"></div>
      </div>

      
      <div className="home-section-2">
        <div className="home-addpost-section bg-white flex flex-col justify-between p-4">
          <div className="home-addpost-text text-gray-500 font-medium text-xs">
            Whats Happening?........
          </div>
          <div className="flex items-center justify-between align-middle">
          <div className="home-addpost-button-section flex">
            <ul className="flex gap-2 ">
              <li ><Bell color="gray" strokeWidth={1.5} size={20}/></li>
              <li><Bookmark color="gray" strokeWidth={1.5} size={20}/></li>
              <li><Mail color="gray" strokeWidth={1.5} size={20}/></li>
              <li><LucideKeySquare color="gray" strokeWidth={1.5} size={20}/></li>
            </ul>
          
          </div>
          <button onClick={handleCreatePostClick} className="text-xs mb-4 bg-black text-white px-4 py-2 mt-6 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Create Post</button>
          </div>
          <hr />
        </div>
        <div className="home-post-section bg-white">

    
        <div className="flex items-center px-4 py-3">
          <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150" alt="Profile" />
          <div className="ml-3 ">
            <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
            <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
          </div>
        </div >
        <img  style={{height:'500px', width:'600px'}} src="https://picsum.photos/id/244/900/900" alt="Post" />
        <div className="flex items-center justify-between mx-4 mt-3 mb-2">
          <div className="flex gap-5">
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
          </div>
          <div className="flex">
            <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
          </div>
        </div>
        <div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
      </div>
      <div className="home-post-section bg-white">

    
<div className="flex items-center px-4 py-3">
  <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150" alt="Profile" />
  <div className="ml-3 ">
    <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
    <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
  </div>
</div >
<img  style={{height:'500px', width:'600px'}} src="https://picsum.photos/id/244/900/900" alt="Post" />
<div className="flex items-center justify-between mx-4 mt-3 mb-2">
  <div className="flex gap-5">
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
  </div>
  <div className="flex">
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
  </div>
</div>
<div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
</div>
<div className="home-post-section bg-white">

    
<div className="flex items-center px-4 py-3">
  <img className="h-8 w-8 rounded-full" src="https://picsum.photos/id/1027/150/150" alt="Profile" />
  <div className="ml-3 ">
    <span className="text-sm font-semibold antialiased block leading-tight">8fact</span>
    <span className="text-gray-600 text-xs block">Asheville, North Carolina</span>
  </div>
</div >
<img  style={{height:'500px', width:'600px'}} src="https://picsum.photos/id/244/900/900" alt="Post" />
<div className="flex items-center justify-between mx-4 mt-3 mb-2">
  <div className="flex gap-5">
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M34.6 6.1c5.7 0 10.4 5.2 10.4 11.5 0 6.8-5.9 11-11.5 16S25 41.3 24 41.9c-1.1-.7-4.7-4-9.5-8.3-5.7-5-11.5-9.2-11.5-16C3 11.3 7.7 6.1 13.4 6.1c4.2 0 6.5 2 8.1 4.3 1.9 2.6 2.2 3.9 2.5 3.9.3 0 .6-1.3 2.5-3.9 1.6-2.3 3.9-4.3 8.1-4.3m0-3c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5.6 0 1.1-.2 1.6-.5 1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z"></path></svg>
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path clipRule="evenodd" d="M47.5 46.1l-2.8-11c1.8-3.3 2.8-7.1 2.8-11.1C47.5 11 37 .5 24 .5S.5 11 .5 24 11 47.5 24 47.5c4 0 7.8-1 11.1-2.8l11 2.8c.8.2 1.6-.6 1.4-1.4zm-3-22.1c0 4-1 7-2.6 10-.2.4-.3.9-.2 1.4l2.1 8.4-8.3-2.1c-.5-.1-1-.1-1.4.2-1.8 1-5.2 2.6-10 2.6-11.4 0-20.6-9.2-20.6-20.5S12.7 3.5 24 3.5 44.5 12.7 44.5 24z" fillRule="evenodd"></path></svg>
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M47.8 3.8c-.3-.5-.8-.8-1.3-.8h-45C.9 3.1.3 3.5.1 4S0 5.2.4 5.7l15.9 15.6 5.5 22.6c.1.6.6 1 1.2 1.1h.2c.5 0 1-.3 1.3-.7l23.2-39c.4-.4.4-1 .1-1.5zM5.2 6.1h35.5L18 18.7 5.2 6.1zm18.7 33.6l-4.4-18.4L42.4 8.6 23.9 39.7z"></path></svg>
  </div>
  <div className="flex">
    <svg fill="#262626" height="24" viewBox="0 0 48 48" width="24"><path d="M43.5 48c-.4 0-.8-.2-1.1-.4L24 29 5.6 47.6c-.4.4-1.1.6-1.6.3-.6-.2-1-.8-1-1.4v-45C3 .7 3.7 0 4.5 0h39c.8 0 1.5.7 1.5 1.5v45c0 .6-.4 1.2-.9 1.4-.2.1-.4.1-.6.1zM24 26c.8 0 1.6.3 2.2.9l15.8 16V3H6v39.9l15.8-16c.6-.6 1.4-.9 2.2-.9z"></path></svg>
  </div>
</div>
<div className="font-semibold text-sm mx-4 mt-2 mb-4">92,372 likes</div>
</div>
   
      </div>
      <div className="home-section-3" >
        <div className="home-scroll">
          <div className="home-scrollbox">
          <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
        <div className="home-recommed-section bg-white" ></div>
          </div>
     

        </div>

      </div>

      </div>

      {showModal &&(<div className="addpost-popup">
      <div className="addpost-popup">
      <div className="addpost-modal rounded-xl bg-white mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
          <p className="font-semibold mb-2">Create Post</p>
          <hr />

          <form onSubmit={formik.handleSubmit} >
     <div className="flex flex-col">
     <input  type="text" placeholder="Title"  className="rounded-lg border mt-3 border-gray-300 p-2 mb-4 outline-none text-xs font-normal" />
        <textarea className=" rounded-lg description sec p-3 h-60 border border-gray-300 outline-none text-xs font-normal" spellCheck="false"  placeholder="Describe everything about this post here"></textarea>


     </div>
        
       
        <div className="icons flex text-gray-500 m-2">
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          <svg className="mr-2 cursor-pointer hover:text-gray-700 border rounded-full p-1 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          <button onClick={handleButtonClick}>
        <svg
          className="mr-2 hover:text-gray-700 border rounded-full p-1 h-7"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
          />
        </svg>

      </button>

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={(e)=>formik.setFieldValue('image',e.target.files[0])}
      />
          <div className="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
        </div>
        
       
        <div className="buttons flex">
          <div   onClick={handleCancelClick} className="text-xs rounded btn border border-gray-300 px-4 py-2  cursor-pointer text-gray-500 ml-auto  hover:bg-red-600  hover:text-white ">Cancel</div>
          <button type="submit" className="text-xs rounded btn border px-4 py-2 cursor-pointer text-white ml-2 bg-gray-900  hover:bg-green-600 " >Publish Post</button>
        </div>
        </form>
      </div>
    </div>
      </div>)}



      
    </div>
  );
}

export default userHome;
{/* <button onClick={handleLogout}>Logout</button> */}
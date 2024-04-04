import { Bookmark, Heart, MessageCircle,Save,X } from "lucide-react";
import { likePost, listJob } from "../services/api/user/apiMethods";
import { useDispatch, useSelector } from "react-redux";
import { setUsePosts } from "../utils/context/reducers/authSlice";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import PostDetails from "./PostDetails";

interface jobProps {
  post: {
    _id: string;
    userId: {
      _id: string;
      username: string;
      profileImageUrl: string;
    };
    title: string;
    imageUrl: string;
    description: string;
    likes: any[];
    isHidden: boolean;
    isBlocked: boolean;
    hideComment: boolean;
    hideLikes: boolean;
    date: string;
  };
}

const Jobs: React.FC<jobProps> = ({ post }) => {
  const dispatch = useDispatch();
  const selectUser = (state: any) => state.auth.user || "";
  const user = useSelector(selectUser) || "";
  const userId = user._id || "";

  const [jobs,setJobs]=useState([])


  
  useEffect(() => {
    try {
    

        listJob({})
      .then((response: any) => {
        const jobsData = response.data.jobs;
        setJobs(jobsData);
   
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

 

  return (

    <>

    {jobs?.map((job: any) => (
      <div className=" home-post-section bg-white p-4  py-10" style={{height:"520px"}}>
      <div className=" w-full flex justify-between items-center">
      <div className="flex">
         <img className="w-14 h-14" src={userId.profileImageUrl} alt="" />
         <div className="mx-5">
           <p className="text-sm">{job.companyName}</p>
           <p className="text-sm font-bold">{job.jobRole}</p>
         </div>
       </div>
 
       <button><Bookmark size={18} color="gray"/></button>
 
      </div>
      <div className="mt-10">
       <p className="text-sm mb-3 font-bold">Job Overview</p>
       <p className="text-xs">{job.jobDescription}</p>
      </div>
      <div className="mt-10">
       <p  className="text-sm mb-3 font-bold">Skills Required</p>
       <div className="flex">
       <p className="text-xs" >{job.requiredSkills}</p>
       {/* <p className="text-xs">Sketch</p>
       <p className="text-xs">Figma</p> */}
       </div>
      
      </div>
      <div className="mt-10">
       <p className="text-sm mb-3 font-bold">Job Details</p>
       <div className="flex w-full justify-between">
 
     
         <div>
         <p  className="text-xs font-semibold"  >Location</p>
           <p className="text-xs" >{job.location}</p>
         </div>
         <div>
           <p  className="text-xs font-semibold"  >Salary</p>
           <p className="text-xs" >{job.salary}</p>
         </div>
         <div>
         <p  className="text-xs font-semibold" >Job Type</p>
           <p className="text-xs" >{job.jobType}</p>
         </div>
       
         <div>
         <p  className="text-xs font-semibold"  >Experience</p>
           <p className="text-xs" >{job.Experience} years</p>
         </div>
         <div>
         <p className="text-xs font-semibold" >Qualifications</p>
           <p className="text-xs" >{job.Qualification}</p>
         </div>
 
       </div>
      </div>
 
      <div className="w-full flex justify-end mt-10">
                       <button
                         type="submit"
                      
                         className=" text-xs rounded btn border w-24 px-4 py-2 cursor-pointer text-white ml-2 bg-green-600"
                       >
                         Apply
                       </button>
                     </div>
 
       
      
 
   
 
     </div>
       
     
     
    
   
    ))}
  </>
         


                    
  )
      }

export default Jobs;

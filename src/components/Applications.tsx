
import React, { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

import { useSelector } from "react-redux";
import ApplyJobForm from "./ApplyJobForm";
import { getemployeeApplications } from "../services/api/user/apiMethods";
import { updateUser } from "../utils/context/reducers/authSlice";

interface jobProps {
  post: {
    _id: string;
    userId: {
      _id: string;
      profileImageUrl: string;
    };
    companyName: string;
    jobRole: string;
    jobDescription: string;
    requiredSkills: string;
    jobLocation: string;
    salary: string;
    jobType: string;
    experience: string;
    qualification: string;
  };
}

const Applications = () => {
  const selectUser = (state: any) => state.auth.user || "";
  const user = useSelector(selectUser) || "";
  const userId = user._id || "";

  const [applications, setApplications] = useState<any[]>([]);
  const [selectedjob, setSelectedJob] = useState<any>({});
  const [isApply, setIsApply] = useState<boolean>(false);



  useEffect(() => {
    try {
getemployeeApplications({applicantId:userId})
        .then((response: any) => {
          const applicationsData = response.data.applications;
          setApplications(applicationsData);
          updateUser(response.data)
        })
        .catch((error) => {
          console.log(error.message);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(applications);
  

  return (
    <>
      {applications?.map((application) => (
        <div key={application._id} className="home-post-section bg-white p-4 " style={{ height: "165px" }}>
          <div className="w-full flex justify-between ">
            <div className="flex">
              <img className="w-14 h-14 rounded-md" src={application.jobId.userId.profileImageUrl} alt="" />
              <div className="mx-5">
                <p className="text-sm">{application.jobId.companyName}</p>
                <p className="text-sm font-bold">{application.jobId.jobRole}</p>
              </div>
            </div>
            <div className="flex text-xs gap-1">
              
          <p className="font-semibold">Status :</p>
          {application.applicationStatus==='Rejected'&&(
            <p className="text-red-600">{application.applicationStatus}</p>

          )}
           {application.applicationStatus==='Pending'&&(
            <p className="text-gray-500">{application.applicationStatus}</p>

          )}
           {application.applicationStatus==='Accepted'&&(
            <p className="text-green-600">{application.applicationStatus}</p>

          )}
              
              
              

            </div>

          </div>
    
       <div className="flex items-end justify-between">
            <div className="flex flex-col  items-start">
              <div className="flex gap-2" >
                <p className="text-xs font-semibold">Location :</p>
                <p className="text-xs">{application.jobId.jobLocation}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xs font-semibold">Salary :</p>
                <p className="text-xs">{application.jobId.salary}</p>
              </div>
              <div className="flex gap-2">
                <p className="text-xs font-semibold">Job Type :</p>
                <p className="text-xs">{application.jobId.jobType}</p>
              </div>
              </div>
              
          <div className=" flex justify-end mt-10">
            <button
       
              className="text-xs rounded btn border px-4 py-2 cursor-pointer text-red-600 ml-2 bg-white"
            >
              Cancel Application
            </button>
          </div>
          </div>
         
       
         
          
       
    


        </div>
      ))}
    </>
  );
};

export default Applications;
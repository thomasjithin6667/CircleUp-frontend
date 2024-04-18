import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/user/signupPage/Signup";
import Login from "../pages/user/loginPage/Loginpage";
import OtpPage from "../pages/user/otpPage/OtpPage";
import ForgotPassword from "../pages/user/forgotPasswordPage/ForgotPassword";
import RegisterSucces from "../pages/user/registerSucces/RegisterSucces";
import ChangePassword from "../pages/user/changePassword/ChangePassword";
import Landing from "../pages/user/landingPage/Landing";
import UserHome from "../pages/user/userHome/UserHome";
import PasswordOtp from "../pages/user/passwordOtpPage/PasswordOtp";
import App from "../App";
import { adminLoginRouter, adminRouter } from "./AdminRouter";
import Profile from "../pages/user/profilePage/Profile";
import UserBio from "../components/UserBio";
import UserPost from "../components/UserPost";
import Settings from "../components/Settings";

import People from "../pages/user/people/People";
import Jobs from "../components/Jobs";
import PeopleDiscover from "../components/PeopleDiscover";
import PeopleConnections from "../components/PeopleConnections";
import PeopleRequests from "../components/PeopleRequests";
import PeopleRequested from "../components/PeopleRequested";
import JobsOpenToWork from "../pages/user/jobs/JobsOpenToWork";
import JobsHiring from "../pages/user/jobs/JobsHiring";
import Applications from "../components/Applications";
import Interviews from "../components/Interviews";
import EditJob from "../components/EditJob";
import AddJob from "../components/AddJob";
import ViewJob from "../components/ViewJob";
import HiringInterviews from "../components/HiringInterviews";
import JobList from "../components/HiringJobList";
import ViewerConnections from "../components/ViewerConnections";
import ViewerJobs from "../components/ViewerJobs";
import ViewerPosts from "../components/ViewerPosts";
import ViewerBio from "../components/ViewerBio";
import ViewerProfile from "../pages/user/visitProfile/ViewerProfile";

import Chat from "../pages/user/chat/Chat";
import Premium from "../components/Premium";
import PaymentSuccess from "../components/PaymentSuccess";
import PaymentFailed from "../components/PaymentFailed";
import PremiumPlans from "../pages/user/premiumPage/PremiumPlans";
import HiringApplicants from "../components/HiringApplicants";
import HiringJobList from "../components/HiringJobList";
import JobsDetails from "../pages/user/jobs/JobsDetails";
import ViewJobApplications from "../components/ViewJobApplications";
import Notifications from "../components/Notifications";
import SavedCollections from "../components/SavedCollections";
import SavedPosts from "../components/SavedPosts";
import SavedJobs from "../components/SavedJobs";
import ViewJobInterviews from "../components/ViewJobInterviews";
import InterviewCall from "../pages/user/interviewCall/InterviewCall";

createBrowserRouter


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>
        
    },
    {
      path: "/home",
      element: <App />,
   
      children: [
        {
          path: "/home",
          element: <UserHome />,
        },
        {
          path: "/home/notifications",
          element: <Notifications/>,
          
        },
        {
          path: "/home/saved",
          element: <SavedCollections/>,
          children:[
            {
              path:"/home/saved/posts",
              element:<SavedPosts />
            },
            {
              path:"/home/saved/jobs",
              element:<SavedJobs/>

            }
          ]

          
        }
 
      ],
    },
    {
      path:"/jobs",
      element:<App/>,
      children:[
        {
          path:"/jobs/hiring",
          element:<JobsHiring/>,
          children:[
            {
              path:"/jobs/hiring/job-list",
              element:<HiringJobList/>
            },
            {
              path:"/jobs/hiring/applicants",
              element:<HiringApplicants/>

            },
            {
              path:"/jobs/hiring/interviews",
              element:<HiringInterviews/>

            },
            {
              path:"/jobs/hiring/interview-call/:roomId",
              element:<InterviewCall/>
            },
            {
              path:"/jobs/hiring/view-job/:jobId",
              element:<ViewJob/>
            },
            {
              path:"/jobs/hiring/add-job",
              element:<AddJob/>
            },
            {
              path:"/jobs/hiring/edit-job/:jobId",
              element:<EditJob/>
            }
          ]
        },{
          path:"/jobs/open-to-work",
          element:<JobsOpenToWork/>,
          children:[
            {
              path:"/jobs/open-to-work/job-list",
              element:<Jobs />
            },
            {
              path:"/jobs/open-to-work/applications",
              element:<Applications/>

            },
            {
              path:"/jobs/open-to-work/interviews",
              element:<Interviews/>
            },
            
            {
              path:"/jobs/open-to-work/interview-call/:roomId",
              element:<InterviewCall/>
            },
          ]
        },{
          path:"/jobs/view-job/",
          element:<JobsDetails/>,
          children:[
            {
              path:"/jobs/view-job/job-info/:jobId",
              element:<ViewJob/>
            },
            {
              path:"/jobs/view-job/applications/pending/:jobId",
              element:<ViewJobApplications/>

            },
            {
              path:"/jobs/view-job/applications/accepted/:jobId",
              element:<ViewJobApplications/>
            },
            
            {
              path:"/jobs/view-job/applications/rejected/:jobId",
              element:<ViewJobApplications/>
            } ,
            {
              path:"/jobs/view-job/interviews/:jobId",
              element:<ViewJobInterviews/>
            },
            {
              path:"/jobs/view-job/interview-call/:roomId",
              element:<InterviewCall/>
            },
          ]
        }
      ]
    },
    {
      path:"/people",
      element:<App/>,
      children:[
        {
          path:"/people",
          element:<People/>,
          children:[
            {
              path:"/people/discover",
              element:<PeopleDiscover/>
            },
            {
              path:"/people/connections",
              element:<PeopleConnections/>
            },
            {
              path:"/people/requests",
              element:<PeopleRequests/>
            },
            {
              path:"/people/requested",
              element:<PeopleRequested/>
            },




          ]
        },
       
      ]
    },
    {
      path:"/profile",
      element:<Profile/>,
      children:[
        {
          path:"bio",
          element:<UserBio/>,
        },
        {
          path:"user-posts",
          element:<UserPost/>,
        },
        {
          path:"settings",
          element:<Settings/>
        }
      ]
        },

        {
          path:"/visit-profile/",
          element:<ViewerProfile/>,
          children:[
            {
              path:"bio/:userId",
              element:<ViewerBio/>,
            },
            {
              path:"posts/:userId",
              element:<ViewerPosts/>,
            },
            {
              path:"jobs/:userId",
              element:<ViewerJobs/>
            },
            
            {
              path:"connections/:userId",
              element:<ViewerConnections/>
            }
          ]
            },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
    {
      path: "/otp",
      element: <OtpPage />,
    },
    {
      path: "/forgot-otp",
      element: <PasswordOtp />,
    },
    {
      path: "/change-password",
      element: <ChangePassword />,
    },
    {
        path:"/register-success",
        element:<RegisterSucces/>
    },
     {
      path:"/chat",
      element:<Chat/>
     }
    ,
    {
      path:"/premium",
      element:<PremiumPlans/>,
      children:[
        {
          path:"/premium/plans",
          element:<Premium/>,
        },
        {
          path:"/premium/payment-success",
          element:<PaymentSuccess/>,
        },
        {
          path:"/premium/payment-failed",
          element:<PaymentFailed/>,
        }
      ]
    },
    {
      path:"/interview-call/:roomId",
      element:<InterviewCall/>

    },
    adminRouter,  
    adminLoginRouter,
  
  ]);
  

export default appRouter;
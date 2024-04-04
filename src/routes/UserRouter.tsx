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
import JobList from "../components/JobList";
import ViewerConnections from "../components/ViewerConnections";
import ViewerJobs from "../components/ViewerJobs";
import ViewerPosts from "../components/ViewerPosts";
import ViewerBio from "../components/ViewerBio";
import ViewerProfile from "../pages/user/visitProfile/ViewerProfile";

import Chat from "../pages/user/chat/Chat";

createBrowserRouter


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Landing/>
          // errorElement: <Error />,
    },
    {
      path: "/home",
      element: <App />,
      // errorElement: <Error />,
      children: [
        {
          path: "/home",
          element: <UserHome />,
        }
        
        // {
        //   path: "/profile/:username",
        //   element: <UserProfile />,
        // },
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
              element:<JobList/>
            },
            {
              path:"/jobs/hiring/interviews",
              element:<HiringInterviews/>

            },
            {
              path:"/jobs/hiring/view-job",
              element:<ViewJob/>
            },
            {
              path:"/jobs/hiring/add-job",
              element:<AddJob/>
            },
            {
              path:"/jobs/hiring/edit-job",
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
            }
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
    adminRouter,  
    adminLoginRouter,
  
  ]);
  

export default appRouter;

import AdminLogin from "../pages/admin/adminLoginPage/AdminLogin";
import AdminDashboard from "../pages/admin/adminDashboardPage/AdminDashboard";
import UserList from "../pages/admin/userlistPage/UserList";
import JobCategoryPage from "../pages/admin/categoryListPage/JobCategoryPage";
import PostList from "../pages/admin/postlistPage/PostList";
import AdminContact from "../pages/admin/adminContact/AdminContact";
import ReportList from "../pages/admin/adminReportlistPage/ReportList";
import AdminJobList from "../pages/admin/adminJoblistPage/AdminJobList";
import AdminStats from "../pages/admin/adminDashboardPage/AdminStats";
import AdminNotifications from "../pages/admin/adminNotifications.tsx/AdminNotifications";

// const AdminRouter=()=>{
//     return (
//         <>
//         <Routes>
//         <Route path="/login" element={<AdminLogin/>} />
//         <Route path="/" element={<AdminDashboard/>} />
//        <Route path="/user-list" element={<UserList/>}/>
        
        
       
//         </Routes>
        
//         </>
//     )


// }

export const adminRouter = {
    path: "/admin",
    element: <AdminDashboard />,
    // errorElement: <Error />,
    children: [
      {
        path:"/admin",
        element: <AdminStats/>
      },
      {
        path:"/admin/users",
        element: <UserList/>
      },
      {
        path:"/admin/job-category",
        element:<JobCategoryPage/>
      }
      ,
      {
        path:"/admin/jobs",
        element:<AdminJobList/>
      },
      {
        path:"/admin/posts",
        element:<PostList/>
        
      }
      ,
      {
        path:"/admin/reports",
        element:<ReportList/>
        
      }
      ,
      {
        path:"/admin/contact",
        element:<AdminContact/>
        
      }
      ,
      {
        path:"/admin/notifications",
        element:<AdminNotifications/>
        
      }
    
    ]
  };
  
  export const adminLoginRouter = {
    path: "/admin/login",
    element: <AdminLogin />
  }


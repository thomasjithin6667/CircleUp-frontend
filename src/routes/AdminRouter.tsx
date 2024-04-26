
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
import ProtectAdmin from "../routes/protectRoutes/ProtectAdminRoutes";
import ErrorPage from "../components/errorComponents/ErrorPage";
import AdminTransactions from "../pages/admin/adminTransactions/AdminTransactions";


export const adminRouter = {
    path: "/admin",
    element:  (
      <ProtectAdmin>
      <AdminDashboard />
      </ProtectAdmin>
    ),  
    errorElement:<ErrorPage/>
    ,
   
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
        
      },
      {
        path:"/admin/transactions",
        element:<AdminTransactions/>
        
      }
    
    
    ]
  };
  
  export const adminLoginRouter = {
    path: "/admin/login",
    element: <AdminLogin />,
    errorElement:<ErrorPage/>
    ,
  }


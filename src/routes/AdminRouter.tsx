
import AdminLogin from "../pages/admin/adminLoginPage/AdminLogin";
import AdminDashboard from "../pages/admin/adminDashboardPage/AdminDashboard";
import UserList from "../pages/admin/userlistPage/UserList";
import JobCategoryPage from "../pages/admin/categoryListPage/JobCategoryPage";
import PostList from "../pages/admin/postlistPage/PostList";

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
      // {
      //   path:"/admin",
      //   element: <Dashboard />
      // },
      {
        path:"/admin/users",
        element: <UserList/>
      },
      {
        path:"/admin/jobs",
        element:<JobCategoryPage/>
      },
      {
        path:"/admin/posts",
        element:<PostList/>
        
      }
    
    ]
  };
  
  export const adminLoginRouter = {
    path: "/admin/login",
    element: <AdminLogin />
  }


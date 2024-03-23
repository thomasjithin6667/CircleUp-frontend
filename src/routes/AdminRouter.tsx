
import AdminLogin from "../pages/admin/adminLoginPage/AdminLogin";
import AdminDashboard from "../pages/admin/adminDashboardPage/AdminDashboard";
import UserList from "../pages/admin/userlistPage/UserList";
import JobCategoryPage from "../pages/admin/categoryListPage/JobCategoryPage";


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
      }
    ]
  };
  
  export const adminLoginRouter = {
    path: "/admin/login",
    element: <AdminLogin />
  }


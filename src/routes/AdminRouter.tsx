import { Route, Routes } from "react-router-dom";
import AdminLogin from "../pages/admin/adminLoginPage/AdminLogin";
import AdminDashboard from "../pages/admin/adminDashboardPage/AdminDashboard";
import UserList from "../pages/admin/userlistPage/UserList";


const AdminRouter=()=>{
    return (
        <>
        <Routes>
        <Route path="/login" element={<AdminLogin/>} />
        <Route path="/" element={<AdminDashboard/>} />
       <Route path="/user-list" element={<UserList/>}/>
        
        
       
        </Routes>
        
        </>
    )


}

export default AdminRouter;
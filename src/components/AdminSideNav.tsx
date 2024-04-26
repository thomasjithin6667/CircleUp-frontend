import { User ,ClipboardList,FilePenLine,BarChartBig, Layers3, Bell, MessageSquareWarning,CreditCard} from "lucide-react";
import { useNavigate } from "react-router-dom";
function AdminSideNav() {

    const navigate=useNavigate()
  return (
    <div className="sidebar-menu w-64   p-4 z-50  bg-white ms-6 mt-5 rounded-lg">
 
    <ul className="mt-4  flex-col ">
        <span className="text-green-600  font-bold flex  pb-8 px-4  ">Overview</span>
        <li className="mb-1 group">
          <a
            onClick={() => {
              navigate("/admin");
            }}
            className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
              location.pathname === "/admin" ? "bg-gray-950 text-gray-100" : ""
            }`}
          >
            <BarChartBig strokeWidth={1.5} size={16} />
            <span className="text-xs">Dashboard</span>
          </a>
        </li>
        <li className="mb-1 group">
          <a
            onClick={() => {
              navigate("/admin/users");
            }}
            className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
              location.pathname === "/admin/users" ? "bg-gray-950 text-gray-100" : ""
            }`}
          >
            <User strokeWidth={1.5} size={16} />
            <span className="text-xs">Users</span>
          </a>
        </li>
        <li className="mb-1 group">
            <a onClick={()=>{navigate('/admin/job-category')}}
       className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
        location.pathname === "/admin/job-category" ? "bg-gray-950 text-gray-100" : ""
      }`}>
                    <Layers3 strokeWidth={1.5} size={16} />
            <span className="text-xs">Jobs category</span>
            </a>
        </li>
        <li className="mb-1 group">
            <a onClick={()=>{navigate('/admin/jobs')}} 
    className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
        location.pathname === "/admin/jobs" ? "bg-gray-950 text-gray-100" : ""
      }`}>            <ClipboardList  strokeWidth={1.5} size={16} />
                <span className="text-xs">Jobs </span>
            </a>
        </li>

        <li className="mb-1 group">
            <a onClick={()=>{navigate('/admin/posts')}} 
    className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
        location.pathname === "/admin/posts" ? "bg-gray-950 text-gray-100" : ""
      }`}>            <FilePenLine  strokeWidth={1.5} size={16} />     
                <span className="text-xs">Posts</span>
                
            </a>
       
        </li>
        <li className="mb-1 group">
            <a onClick={()=>{navigate('/admin/reports')}}  
    className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
        location.pathname === "/admin/reports" ? "bg-gray-950 text-gray-100" : ""
      }`}>            <MessageSquareWarning  strokeWidth={1.5} size={16} />  
                <span className="text-xs">Reports</span>
            </a>
        </li>
            <li className="mb-1 group">
            <a onClick={()=>{navigate('/admin/transactions')}}
    className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
        location.pathname === "/admin/transactions" ? "bg-gray-950 text-gray-100" : ""
      }`}>            <CreditCard strokeWidth={1.5} size={16} />
                <span className="text-xs">Transactions</span>
                {/* <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-green-600 bg-green-200 rounded-full">2 New</span> */}
            </a>
        </li>

        <li className="mb-1 group">
            <a onClick={()=>{navigate('/admin/notifications')}}
    className={`flex font-semibold items-center gap-1 py-3 px-4  hover:bg-gray-950 hover:text-gray-100 rounded-md group-[.active]:bg-gray-950 group-[.active]:text-white ${
        location.pathname === "/admin/notifications" ? "bg-gray-950 text-gray-100" : ""
      }`}>            <Bell  strokeWidth={1.5} size={16} />
                <span className="text-xs">Notifications</span>
                {/* <span className=" md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-600 bg-red-200 rounded-full">5</span> */}
            </a>
        </li>
    
    </ul>
</div>
  )
}

export default AdminSideNav
import Header from "../../../components/Header";
import { useDispatch } from 'react-redux';
import { logout } from "../../../utils/context/reducers/authSlice";
import { useNavigate } from 'react-router-dom';


function userHome() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('email')
    navigate('/login')
  };



  return (
    <div className="bg-gray-200 h-screen">
      <Header />

      <div className="section-1">
        <div className="profile-card"></div>
        <button onClick={handleLogout}>Logout</button>
      </div>

      
      <div className="section-2"></div>
      <div className="section-3"></div>
    </div>
  );
}

export default userHome;

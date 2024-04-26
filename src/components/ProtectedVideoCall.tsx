import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import InterviewCall from "../pages/user/interviewCall/InterviewCall";
import NotAuthorized from "./errorComponents/NotAuthorized";





function ProtectedVideoCall() {
    const {  userId } = useParams();
    const selectUser = (state: any) => state.auth.user;
     const user = useSelector(selectUser);
     const loggedInUserId = user._id;  
    if (loggedInUserId === userId) {
      return <InterviewCall />;
    } else {
      return <NotAuthorized/> ;
    }
  }
  
  export default ProtectedVideoCall;
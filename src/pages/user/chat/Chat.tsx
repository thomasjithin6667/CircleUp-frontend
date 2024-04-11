import ChatUsers from "../../../components/chatComponents/ChatUsers";
import Messages from "../../../components/chatComponents/Messages";
import ChatingUser from "../../../components/chatComponents/ChatingUser";
import { getUserConversations, getUserMessages } from "../../../services/api/user/apiMethods";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Header from "../../../components/Header";

function Chat() {
  const selectUser = (state: any) => state.auth.user;
  const user = useSelector(selectUser);
  const userId = user._id;
  const [conversations, setConversations] = useState([]);
  const [currentChat,setCurrentChat] = useState('');



  useEffect(()=>{
    getUserConversations(userId).then((response:any)=>{
      setConversations(response.data);
      
    })
  },[])  

  console.log(currentChat);
  console.log("current chat");
  
  
    
    
  return (
  <div>

  <div className="relative flex w-full  overflow-hidden antialiased bg-gray-200" style={{height:"730px"}}>
   
      <ChatUsers conversations={conversations} user={user} setCurrentChat={setCurrentChat} setConversations={setConversations} />


      <Messages user={user} currentChat={currentChat} />
   
    {/* <ChatingUser /> */}







</div>;
</div>
  )
}

export default Chat;
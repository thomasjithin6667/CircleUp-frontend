import ChatUsers from "../../../components/chatComponents/ChatUsers";
import Messages from "../../../components/chatComponents/Messages";
import ChatingUser from "../../../components/chatComponents/ChatingUser";
import { getUserConversations, getUserMessages } from "../../../services/api/user/apiMethods";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import NochatScreen from "../../../components/chatComponents/NochatScreen";
import { io } from "socket.io-client";
import { BASE_URL } from "../../../constants/baseUrls"

function Chat() {
  const selectUser = (state: any) => state.auth.user;
  const user = useSelector(selectUser);
  const userId = user._id;
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState('');
  const socket = useRef()
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.current = io(BASE_URL);


    getUserConversations(userId).then((response: any) => {
      setConversations(response.data);
    });
  }, []);
  useEffect(() => {
    socket?.current?.emit("addUser", user._id);
    socket?.current?.on("getUsers", (users) => {
      setOnlineUsers(users);
      
    });
  }, [user]);

  useEffect(() => {

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setCurrentChat(''); 
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);


  return (
    <div> 
      <div className="relative flex w-full  overflow-hidden antialiased bg-gray-200" style={{ height: "730px" }}>

        <ChatUsers conversations={conversations} user={user}  setCurrentChat={setCurrentChat} setConversations={setConversations} />

        {currentChat ? <Messages user={user} socket={socket} currentChat={currentChat} /> : <NochatScreen/>}

        {/* <ChatingUser /> */}
      </div>
    </div>
  );
}

export default Chat;

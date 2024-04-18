import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSelector } from "react-redux";
import "./interviewCall.css"

function InterviewCall() {

  const { roomId } = useParams();
  const containerRef = useRef(null);
  const selectUser = (state: any) => state.auth.user;
  const user = useSelector(selectUser);
  const navigate = useNavigate();
  const location = useLocation();
  const userId = user._id;
  const username = user.username;

  const handleLeaveRoom = () => {
    console.log("user Left");
    navigate(location.state?.from || "/");
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const myMeeting = async () => {
      const appId = 1038037990;
      const serverSecret = "699392725bb3aac59d7c8af76ec03bc0";
      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
        appId,
        serverSecret,
        roomId,
        Date.now().toString(),
        username
      );
      const zc = ZegoUIKitPrebuilt.create(kitToken);
      zc.joinRoom({
        container: containerRef.current,
        scenario: {
          mode: ZegoUIKitPrebuilt.GroupCall,
        },
        showPreJoinView: true,
        preJoinViewConfig: {
          title: "Interview Meeting" 
        },
        branding: {
          logoURL: "https://i.postimg.cc/YC7Hwhxb/Screenshot-2024-03-04-151411.png"
        },
        showScreenSharingButton: true,
        showRoomTimer:true,
        turnOnCameraWhenJoining: true,
        turnOnMicrophoneWhenJoining: false,
        showLeaveRoomConfirmDialog: false,
        onLeaveRoom: handleLeaveRoom,
      });
    };
    myMeeting();
  },[roomId,userId,username,navigate]);
  return (
    <div>
      <div ref={containerRef} style={{height:'100vh',width:'100vw'}}/>
    </div>
  );
}

export default InterviewCall;
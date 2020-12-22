import React, { useState, useRef, useEffect } from 'react';
import * as Style from './style';
import { initiateConnection, initiateLocalStream } from '../../WebRTC'
import ProfilButton from '../UI/ProfilButton';
import receivevideocallicon from '../../Illustration/receivevideocallicon.svg';
import Screen from './Screen'




const VideoChat = () => {
  const [videoChatStep, setVideoChatStep] = useState(1);
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef()

  const next = () => {
    setVideoChatStep(videoChatStep + 1);
  };

  const back = () => {
    setVideoChatStep(videoChatStep - 1);
  };
  // const localStream = async () => {
  //   return await initiateLocalStream();
  // }




  useEffect(() => {
    async function LocalStream() {
      const localStream = await initiateLocalStream();
      localVideoRef.current.srcObject = localStream;
    }
    LocalStream();
    const localConnection = initiateConnection()
  })

  const handleVideoChat = () => {
    switch (videoChatStep) {
      case 1:
        return (
          <>
            <video id="profil" ref={localVideoRef} autoPlay playsInline></video>
            <img src={receivevideocallicon} />
            <div>
              <ProfilButton onClick={() => next()}>Start a Call</ProfilButton>
              <ProfilButton onClick={() => back()}>Decline</ProfilButton>
            </div>
          </>
        );
      case 2:
        return <Screen
          back={back}
          localVideoRef={localVideoRef}
        />;
      default: return null;
    }
  };

  return (
    <Style.Wrapper>
      {handleVideoChat()}
    </Style.Wrapper>
  );
};

export default VideoChat;

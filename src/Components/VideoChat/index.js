import React, { useState, useRef, useEffect } from 'react';
import * as Style from './style';
import {
  initiateConnection,
  initiateLocalStream,
  listenToConnectionEvents,
  createOffer,
  startCall,
  sendAnswer
} from '../../WebRTC'
import ProfilButton from '../UI/ProfilButton';
import receivevideocallicon from '../../Illustration/receivevideocallicon.svg';
import Screen from './Screen'
import 'webrtc-adapter'

const VideoChat = (props) => {
  const { doVideoOffer, doCandidate, participants, videoStep, doAnswer, me, notif } = props;
  const localVideoRef = useRef(null)
  const remoteVideoRef = useRef(null)
  const [localconnection, setLocalConnection] = useState();
  const [localstream, setLocalStrean] = useState()



  useEffect(() => {
    async function LocalStream() {
      const localStream = await initiateLocalStream();
      localVideoRef.current.srcObject = localStream;
      setLocalStrean(localStream)
    }
    async function localConnection() {
      const localConnection = await initiateConnection();
      setLocalConnection(localConnection)
    }
    LocalStream();
    localConnection();
  }, []);


  const startCallAction = async (userToCall) => {
    await listenToConnectionEvents(localconnection, userToCall, remoteVideoRef, doCandidate)
    // create an offer
    await createOffer(localconnection, localstream, userToCall, doVideoOffer)
  }

  const sendAnswerCall = async (notif) => {
    // setConnectedUser(notif.from)
    await listenToConnectionEvents(localconnection, notif.from, remoteVideoRef, doCandidate)
    await sendAnswer(
      localconnection,
      localstream,
      notif.from,
      doAnswer)
    // await startCall(localconnection, notif)
  }


  const handleVideoChat = () => {
    switch (videoStep) {
      case 1:
        return (
          <>
            <video id="profil" ref={localVideoRef} autoPlay playsInline></video>
            <img alt="img" src={receivevideocallicon} />
            {notif.type === 'candidate' ?
              <div>
                <ProfilButton onClick={() => sendAnswerCall(notif)}>Accept</ProfilButton>
                <ProfilButton >Decline</ProfilButton>
              </div>
              :
              <div>
                <ProfilButton onClick={() => startCallAction(participants.participants.filter(e => e !== me.id)[0])}>Start a Call</ProfilButton>
                <ProfilButton >Decline</ProfilButton>
              </div>}
          </>
        );
      case 2:
        return <Screen
          localVideoRef={localVideoRef}
          remoteVideoRef={remoteVideoRef}
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

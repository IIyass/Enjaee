import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import * as Style from './style';
import { listenToConnectionEvents, initiateConnection, initiateLocalStream } from '../../WebRTC'
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import ProfilButton from '../UI/ProfilButton';
import receivevideocallicon from '../../Illustration/receivevideocallicon.svg';
import silenticon from '../../Illustration/silenticon.svg';
import endreceiveaudiocallicons from '../../Illustration/Bounding_Circle.svg';
import 'webrtc-adapter'
import firebase from 'firebase';
import useVideoRoom from '../../hooks/useVideoRoom'
import usePrevious from '../../hooks/usePrevious'

const roomsRef = firestoreFirebase.collection('/rooms');
const usersRef = firestoreFirebase.collection('/users');

const VideoChat = (props) => {

  const { doVideoOffer,
    doCandidate,
    participants,
    videoStep,
    doAnswer,
    me,
    notif,
    startCallAction,
    leaveRoom
  } = props;

  const remoteVideoRef = useRef(null);
  const [localconnection, setLocalConnection] = useState('');
  const [localstream, setLocalStrean] = useState('');
  const localVideoRef = useRef(null);



  const RoomQuery = roomsRef
    .where(firebase.firestore.FieldPath.documentId(), "==", participants.id);
  const [snapshot1, loading1, error1] = useCollectionData(RoomQuery, { idField: 'id' });

  const UserQuery = usersRef
    .where(firebase.firestore.FieldPath.documentId(),
      "==",
      participants.participants.filter(e => e === me.id)[0]);
  const [snapshot2, loading2, error2] = useCollectionData(UserQuery, { idField: 'id' });

  const sendOfferCall = async () => {
    await listenToConnectionEvents(localconnection,
      participants.participants.filter(e => e !== me.id)[0],
      remoteVideoRef,
      doCandidate);
    await localconnection.addStream(localstream)
    // create an an offer
    const offer = await localconnection.createOffer();
    await localconnection.setLocalDescription(offer);
    doVideoOffer(participants.id, offer)
  }

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
    localConnection();
    LocalStream();
  }, [videoStep]);

  console.log('remoteVideoRef', remoteVideoRef.current !== null && remoteVideoRef.current.srcObject)
  console.log('localVideoRef', localVideoRef.current !== null && localVideoRef.current.srcObject)
  console.log('now', videoStep)

  useEffect(() => {
    if (!loading1 && snapshot1[0].type === 'answer' && snapshot1[0].from !== me.id) {
      async function StartingCall() {
        const answer = JSON.parse(snapshot1[0].answer)
        await localconnection.setRemoteDescription(answer);
      }
      StartingCall()
    }
  }, [loading1, snapshot1])

  useEffect(() => {
    if (!loading2 &&
      !loading1 &&
      snapshot1[0].type === 'answer' &&
      snapshot2[0].VideoRoom.type === 'candidate' &&
      localconnection.remoteDescription !== null
    ) {
      // apply the new received candidate to the connection
      async function addCandidateCall() {
        const candidate = JSON.parse(snapshot2[0].VideoRoom.candidate)
        await localconnection.addIceCandidate(new RTCIceCandidate(candidate))
        startCallAction()
      }
      addCandidateCall()
    }
  }, [loading1, loading2, snapshot1, snapshot2, videoStep])

  const sendAnswerCall = async () => {
    await listenToConnectionEvents(localconnection,
      participants.participants.filter(e => e !== me.id)[0],
      remoteVideoRef,
      doCandidate);
    await localconnection.addStream(localstream)
    const offer = JSON.parse(snapshot1[0].offer)
    await localconnection.setRemoteDescription(offer)
    // create an answer to an offer
    const answer = await localconnection.createAnswer()
    await localconnection.setLocalDescription(answer)
    await doAnswer(participants.id, answer)
  }

  const renderCallComponent = () => {
    return <>
      <video id="profil" ref={localVideoRef} autoPlay playsInline></video>
      <img alt="img" src={receivevideocallicon} />
      <div>
        {!loading1 && snapshot1[0].type === 'offer' && snapshot1[0].from === me.id ?
          <ProfilButton>Waiting Other Response </ProfilButton> :
          <ProfilButton onClick={() => sendOfferCall(notif)}>Call OtherName</ProfilButton>
        }
      </div>
    </>
  }

  const renderAnswerComponent = () => {
    return <>
      <video id="profil" ref={localVideoRef} autoPlay playsInline></video>
      <video ref={remoteVideoRef} autoPlay playsInline></video>
      <img alt="img" src={receivevideocallicon} />
      <div>
        <ProfilButton onClick={() => sendAnswerCall()}>Accept</ProfilButton>
        <ProfilButton onClick={() => leaveRoom(me.id,
          participants.participants.filter(e => e !== me.id),
          participants.id)} >Decline</ProfilButton>
      </div>
    </>
  }

  const renderTwoVideoScreen = () => <><video className="videoInsert" ref={remoteVideoRef} autoPlay playsInline></video>
    <div id="top">
      <div><h1>00:34</h1></div>
      <video className="video" ref={localVideoRef} autoPlay playsInline></video>
    </div>
    <div id="bottom">
      <img alt="silent" src={silenticon} />
      <ProfilButton
        onClick={() => leaveRoom(me.id,
          participants.participants.filter(e => e !== me.id),
          participants.id)} >End Call</ProfilButton>
      <img alt="call" src={endreceiveaudiocallicons} />
    </div>
  </>

  const handleVideoChat = () => {
    switch (videoStep) {
      case 1:
        return loading1 ? <h2>loading1..</h2> :
          (snapshot1[0].from === '' || snapshot1[0].from === me.id) ?
            renderCallComponent() :
            renderAnswerComponent()

      case 2:
        return renderTwoVideoScreen()

      default: return null;
    }
  };

  return (
    <Style.Wrapper>
      {handleVideoChat()}
    </Style.Wrapper>
  );
};

export default React.memo(VideoChat);

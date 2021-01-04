import React, { useRef, useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import * as Style from './style';
import { sendOfferCall, sendAnswerCall, } from '../../WebRTC'
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import MuteVideo from '../../Illustration/muteicon@3x.svg';
import CallVideo from '../../Illustration/receivevideocallicon.svg';
import ProfilButton from '../UI/ProfilButton';
import receiveaudiocallicon from '../../Illustration/receiveaudiocallicon.svg';
import silenticon from '../../Illustration/silenticon.svg';
import endreceiveaudiocallicons from '../../Illustration/volumeicon.svg';
import volumeicon from '../../Illustration/volumeicon.svg';
import muteicon from '../../Illustration/muteicon.svg'
import keypadicon from '../../Illustration/keypadicon.svg'
import jhon from '../../Illustration/Henry.png'
import 'webrtc-adapter'
import { formatTime } from '../../helpers'
import firebase from 'firebase';
import useVideoRoom from '../../hooks/useVideoRoom'
import useTimer from '../../hooks/useTimer'
import useUserName from '../../hooks/useUserName'

const roomsRef = firestoreFirebase.collection('/rooms');
const usersRef = firestoreFirebase.collection('/users');

const AudioChat = (props) => {

  const {
    doVideoOffer,
    doCandidate,
    roomMetadata,
    videoStep,
    doAnswer,
    me,
    leaveRoom,
  } = props;

  const remoteVideoRef = useRef(null);
  const { timer, handleStart, handleReset } = useTimer();
  const [mute, setMute] = useState(false);
  const [displayVideo, setDisplayVideo] = useState(true);
  const [localconnection, localstream, localVideoRef] = useVideoRoom(videoStep, false);
  const [userName1] = useUserName(roomMetadata.participants.filter(e => e !== me.id)[0])

  const [displayVideoScreen, setDisplayVideoScreen] = useState(false);

  // Listening on Room with id === paricitpant.id
  const RoomQuery = roomsRef
    .where(firebase.firestore.FieldPath.documentId(), "==", roomMetadata.id);
  const [snapshot1, loading1, error1] = useCollectionData(RoomQuery, { idField: 'id' });

  // Listening on updating my candidate field.
  const UserQuery = usersRef
    .where(firebase.firestore.FieldPath.documentId(),
      "==",
      roomMetadata.participants.filter(e => e === me.id)[0]);
  const [snapshot2, loading2, error2] = useCollectionData(UserQuery, { idField: 'id' });

  // Caller Receive Answer.
  useEffect(() => {
    if (!loading1 && snapshot1[0].type === 'answer' && snapshot1[0].from !== me.id) {
      async function StartingCall() {
        const answer = JSON.parse(snapshot1[0].answer)
        await localconnection.setRemoteDescription(answer);
      }
      StartingCall()
    }
    return handleReset();
  }, [loading1, snapshot1])

  // Setting candidate Data after filling remoteDescription value.
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
        setDisplayVideoScreen(true)
        handleStart();
      }
      addCandidateCall()
    }
    return handleReset();
  }, [loading1, loading2, snapshot1, snapshot2, videoStep]);

  useEffect(() => {
    if (!loading1 &&
      snapshot1[0].type === 'leave'
    ) {
      leaveRoom(me.id,
        roomMetadata.participants.filter(e => e !== me.id),
        roomMetadata.id, localconnection, localstream, localVideoRef,
        displayVideoScreen, setDisplayVideoScreen)

    }
  }, [loading1, snapshot1]);

  const renderCallComponent = () => {
    return <div>
      {!loading1 && snapshot1[0].type === 'offer' && snapshot1[0].from === me.id ?
        <ProfilButton>Waiting {userName1} Response </ProfilButton> :
        <ProfilButton onClick={() => sendOfferCall(localconnection,
          localstream,
          roomMetadata,
          me,
          remoteVideoRef,
          doCandidate,
          doVideoOffer)}>
          Call {userName1}
        </ProfilButton>
      }
    </div>
  }

  const renderAnswerComponent = () => {
    return <div>
      <ProfilButton onClick={() => sendAnswerCall(localconnection,
        localstream,
        roomMetadata,
        snapshot1[0],
        me,
        remoteVideoRef,
        doCandidate,
        doAnswer
      )}>Accept</ProfilButton>
      <ProfilButton onClick={() => leaveRoom(me.id,
        roomMetadata.participants.filter(e => e !== me.id),
        roomMetadata.id, localconnection, localstream, localVideoRef,
        displayVideoScreen, setDisplayVideoScreen)} >Decline</ProfilButton>
    </div>
  }


  const renderTwoVideoScreen = () => <div id="screenShare"><audio
    className="videoInsert"
    muted={mute}
    ref={remoteVideoRef}
    autoPlay
    playsInline>
  </audio>
    <img src={jhon} alt="profil" id="profil" />
    <h1>{userName1}</h1>
    <h2>{formatTime(timer)}</h2>
    <div id="bottom">
      {mute ? <img alt="silent" onClick={() => setMute(!mute)} src={silenticon} /> :
        <img alt="silent" onClick={() => setMute(!mute)} src={endreceiveaudiocallicons} />
      }
      <img src={muteicon} alt="micro" />
      <ProfilButton
        onClick={() => {
          leaveRoom(me.id,
            roomMetadata.participants.filter(e => e !== me.id),
            roomMetadata.id, localconnection, localstream, localVideoRef,
            displayVideoScreen, setDisplayVideoScreen);

        }}>End Call</ProfilButton>
      <img src={keypadicon} alt="keypadicon" />
      <img src={volumeicon} alt="volumeicon" />
    </div>
  </div>


  const handleVideoChat = () => {

    return <>
      <div id="requestStep">
        <img src={jhon} alt="profil" id="profil" />
        <audio id="profil"
          style={{ display: 'none' }}
          muted ref={localVideoRef} autoPlay playsInline></audio>
        <audio ref={remoteVideoRef}
          style={{ display: 'none' }}
          autoPlay
          playsInline>
        </audio>
        <img alt="img" src={receiveaudiocallicon} />
        {
          loading1 ? <h2>loading1..</h2> :
            (snapshot1[0].from === '' || snapshot1[0].from === me.id) ?
              renderCallComponent() :
              renderAnswerComponent()}
      </div>
      {renderTwoVideoScreen()}
    </>


  };

  return (
    <Style.Wrapper display={displayVideoScreen}>
      {handleVideoChat()}
    </Style.Wrapper>
  );
};

export default AudioChat;

import React, { useEffect, useState, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Style from './style';
import Jolie from '../../Illustration/Henry.png';
import Input from '../../Components/UI/AuthInput';
import BodyContainer from '../../Common/Body';
import { SendMessage, GetRoomMetaData, readMessage } from '../../store/WebChat/action'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'webrtc-adapter';
import ChatScreen from '../../Components/ChatScreen';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import useTimer from '../../hooks/useTimer'
import { ChangeChatDuration } from '../../store/TeamChat/action';
import useTimerCountDown from '../../hooks/useTimerCountDown';
import { fetchMyData } from '../../store/Me/action';

const messagesRef = firestoreFirebase.collection('/messages');

const ChatOnline = (props) => {
  const { SendMessage, fetchMyData,
    readMessage, GetRoomMetaData, ChangeChatDuration } = props;
  const { timer, handleStart } = useTimer();
  const roomLoading = useSelector((state) => state.WebChatReducer.roomLoading)
  const roomMetadata = useSelector((state) => state.WebChatReducer.room)
  const me = useSelector((state) => state.MeReducer.Me)
  const [fixedDuration, setfixedDuration] = useState("0h:00min");
  const [leftTime] = useTimerCountDown(timer, fixedDuration);

  const dispatch = useDispatch();

  const fetchMyDataCall = useCallback(
    () => dispatch(fetchMyData),
    [dispatch, fetchMyData]
  );

  useEffect(() => {
    fetchMyDataCall()
  }, [fetchMyDataCall]);

  const query = messagesRef
    .where("room", "==", Object.keys(roomMetadata).length >= 1 && roomMetadata.id)
    .orderBy("createdAt")
    .limitToLast(24);

  const [snapshot, loading, error] = useCollectionData(query, { idField: 'id' });

  useEffect(() => {
    GetRoomMetaData(props.match.params.id)
  }, [GetRoomMetaData, props.match.params.id])


  useEffect(() => {

    if (!roomLoading) {
      handleStart();
      me.teamChatContact && me.teamChatContact.every((contact => {
        if (contact.contactId === roomMetadata.participants.filter(e => e !== me.id)[0]) {
          setfixedDuration(contact.duration)
        }
      }))
    }
    function EndChat() {
      if (!roomLoading) {
        ChangeChatDuration(leftTime, roomMetadata.participants.filter(e => e !== me.id)[0], fixedDuration)
      }
    }
    return () => EndChat()
  }, [timer, roomLoading, me]);

  return (
    <Style.Wrapper as={BodyContainer}>
      <Style.LeftContainer>
        <div id="image">
          <img alt="profil" src={Jolie} />
        </div>
        <Input type="text" name="name" disabled value={me.name} icon="blackcontact" placeholder="Full name" />
        <Input type="text" disabled value='Developer' name="function" icon="success" placeholder="Developers" />

      </Style.LeftContainer>
      <Style.RightContainer backgroundColor={true}>
        {roomLoading ? <h1>Loading ..</h1> :
          <ChatScreen
            roomMetadata={roomMetadata}
            SendMessage={SendMessage}
            messages={snapshot}
            me={me}
            readMessage={readMessage}
            loading={loading}
          />}
      </Style.RightContainer>
    </Style.Wrapper>
  );
};

export default connect(null,
  {
    GetRoomMetaData,
    SendMessage,
    ChangeChatDuration,
    fetchMyData,
    readMessage
  })(ChatOnline);


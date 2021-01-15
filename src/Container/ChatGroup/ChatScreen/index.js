import React, { useEffect, useCallback } from 'react';
import ChatButton from '../../../Components/UI/chatButton';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Style from './style';
import Jolie from '../../../Illustration/Henry.png';
import Input from '../../../Components/UI/AuthInput';
import BodyContainer from '../../../Common/Body'
import { SendMessage, GetRoomMetaData } from '../../../store/WebChat/action'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import 'webrtc-adapter';
import ChatScreen from '../../../Components/ChatScreen';
import { firestoreFirebase } from '../../../firebaseService/FirebaseIndex';
import { ChangeChatDuration } from '../../../store/TeamChat/action';
import { fetchMyData } from '../../../store/Me/action';

const messagesRef = firestoreFirebase.collection('/messages');

const ChatOnline = (props) => {
  const { SendMessage, fetchMyData, GetRoomMetaData } = props;

  const roomLoading = useSelector((state) => state.WebChatReducer.roomLoading)
  const roomMetadata = useSelector((state) => state.WebChatReducer.room)
  const me = useSelector((state) => state.MeReducer.Me)

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



  console.log(roomMetadata)
  return (
    roomLoading ? <h1>Loading ..</h1> : <Style.Wrapper as={BodyContainer}>
      <Style.LeftContainer>
        <div id="image">
          <img alt="profil" src={Jolie} />
        </div>
        <Input type="text" name="name" disabled value={roomMetadata.name} />
        <Input type="text" disabled value={`Members ${roomMetadata.participants.length}`} name="function" />
        <div id="button">
          <ChatButton icon="clear" border="#000" color="#fff" text="#000">Clear Chat</ChatButton>
          <ChatButton icon="block" border="#000" color="#fff" text="#000">Block</ChatButton>

        </div>
      </Style.LeftContainer>
      <Style.RightContainer backgroundColor={true}>

        <ChatScreen
          gradientMessage
          roomMetadata={roomMetadata}
          SendMessage={SendMessage}
          messages={snapshot}
          me={me}
          loading={loading}
        />
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

  })(ChatOnline);


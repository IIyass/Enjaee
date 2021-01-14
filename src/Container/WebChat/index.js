import React, { useEffect, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Style from './style';
import Jolie from '../../Illustration/Henry.png'
import Input from '../../Components/UI/AuthInput'
import ChatButton from '../../Components/UI/chatButton';
import ChatScreen from '../../Components/ChatScreen'
import AudioChat from '../../Components/AudioChat';
import VideoChat from '../../Components/VideoChat';
import BodyContainer from '../../Common/Body';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {
    goToChatRoom,
    goToAudioRoom,
    goToVideoRoom,
    SendMessage,
    GetRoomMetaData,
    readMessage
} from '../../store/WebChat/action'
import { doVideoOffer, doCandidate, doVideoAnswer, leaveRoom } from '../../store/WebChat/action'
import { fetchMyData } from '../../store/Me/action';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import 'webrtc-adapter';

const messagesRef = firestoreFirebase.collection('/messages');

const WebChat = (props) => {

    const {
        SendMessage,
        goToAudioRoom,
        goToChatRoom,
        goToVideoRoom,
        fetchMyData,
        doCandidate,
        doVideoOffer,
        doVideoAnswer,
        leaveRoom,
        GetRoomMetaData,
        readMessage
    } = props

    const dispatch = useDispatch();

    const fetchMyDataCall = useCallback(
        () => dispatch(fetchMyData),
        [dispatch, fetchMyData]
    );

    useEffect(() => {
        GetRoomMetaData(props.match.params.id)
    }, [GetRoomMetaData, props.match.params.id])

    useEffect(() => {
        fetchMyDataCall()
    }, [fetchMyDataCall]);

    const roomLoading = useSelector((state) => state.WebChatReducer.roomLoading)
    const roomMetadata = useSelector((state) => state.WebChatReducer.room)
    const chatStep = useSelector((state) => state.WebChatReducer.chatStep)
    const videoStep = useSelector((state) => state.WebChatReducer.videoStep)
    const me = useSelector((state) => state.MeReducer.Me)

    const query = messagesRef
        .where("room", "==", Object.keys(roomMetadata).length >= 1 && roomMetadata.id)
        .orderBy("createdAt")
        .limitToLast(24)

    const [snapshot, loading, error] = useCollectionData(query, { idField: 'id' });

    const goToAudioRoomCall = useCallback(
        () => dispatch(goToAudioRoom),
        [dispatch, goToAudioRoom]
    );

    const goToChatRoomCall = useCallback(
        () => dispatch(goToChatRoom),
        [dispatch, goToChatRoom]
    );

    const goToVideoRoomCall = useCallback(
        () => dispatch(goToVideoRoom),
        [dispatch, goToVideoRoom]
    );

    const handleChatStep = () => {
        switch (chatStep) {
            case 1:
                return roomLoading ? <h1>Loading ...</h1> :
                    <ChatScreen
                        gradientMessage
                        roomMetadata={roomMetadata}
                        SendMessage={SendMessage}
                        messages={snapshot}
                        readMessage={readMessage}
                        me={me}
                        loading={loading}
                    />;
            case 2:
                return roomLoading ? <h1>Loading ...</h1> :
                    <AudioChat
                        doVideoOffer={doVideoOffer}
                        doCandidate={doCandidate}
                        roomMetadata={roomMetadata}
                        videoStep={videoStep}
                        doAnswer={doVideoAnswer}
                        me={me}
                        leaveRoom={leaveRoom}
                    />;
            case 3:
                return roomLoading ? <h1>Loading ...</h1> :
                    <VideoChat
                        doVideoOffer={doVideoOffer}
                        doCandidate={doCandidate}
                        roomMetadata={roomMetadata}
                        videoStep={videoStep}
                        doAnswer={doVideoAnswer}
                        me={me}
                        leaveRoom={leaveRoom}
                    />;
            default:
                return <ChatScreen gradientMessage />;
        }
    }
    return (
        <Style.Wrapper as={BodyContainer}>
            <Style.LeftContainer>
                <div id="image">
                    <img alt="profil" src={Jolie} />
                </div>
                <Input type="text" name="name" disabled value={me.name} icon="blackcontact" placeholder="Full name" />
                <Input type="text" disabled value='Developer' name="function" icon="success" placeholder="Developers" />
                <ChatButton onClick={() => goToChatRoomCall()} icon={chatStep === 1 ? 'chatWhite' : 'chat'} border={chatStep === 1 ? '#53A8CB' : '#000'} color={chatStep === 1 ? '#53A8CB' : 'fff'} text={chatStep === 1 ? '#fff' : '000'}>Chat</ChatButton>
                <ChatButton onClick={() => goToAudioRoomCall()} icon={chatStep === 2 ? 'audioWhite' : 'audio'} border={chatStep === 2 ? '#53A8CB' : '#000'} color={chatStep === 2 ? '#53A8CB' : 'fff'} text={chatStep === 2 ? '#fff' : '000'}>Audio Call</ChatButton>
                <ChatButton onClick={() => goToVideoRoomCall()} icon={chatStep === 3 ? 'videoWhite' : 'video'} border={chatStep === 3 ? '#53A8CB' : '#000'} color={chatStep === 3 ? '#53A8CB' : 'fff'} text={chatStep === 3 ? '#fff' : '000'}>Video Call</ChatButton>
                <ChatButton icon="clear" border="#000" color="#fff" text="#000">Clear Chat</ChatButton>
                <ChatButton icon="block" border="#000" color="#fff" text="#000">Block</ChatButton>
            </Style.LeftContainer>
            <Style.RightContainer backgroundColor={chatStep === 1}>
                {handleChatStep()}
            </Style.RightContainer>
        </Style.Wrapper>
    );
};

export default connect(null,
    {
        goToAudioRoom,
        readMessage,
        goToChatRoom,
        goToVideoRoom,
        fetchMyData,
        SendMessage,
        doVideoOffer,
        doCandidate,
        doVideoAnswer,
        GetRoomMetaData,
        leaveRoom
    })(WebChat);


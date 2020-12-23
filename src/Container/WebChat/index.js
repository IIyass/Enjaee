import React, { useEffect, useCallback, useState } from 'react';
import firebase from 'firebase';
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
    SendMessage
} from '../../store/WebChat/action'
import { doVideoOffer, doCandidate, doVideoAnswer } from '../../store/WebChat/action'
import { fetchMyData } from '../../store/Me/action';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import {
    listenToConnectionEvents,
    addCandidate,
    sendAnswer
} from '../../WebRTC'

const messagesRef = firestoreFirebase.collection('/messages');


const WebChat = (props) => {

    const {
        location,
        SendMessage,
        goToAudioRoom,
        goToChatRoom,
        goToVideoRoom,
        fetchMyData,
        doCandidate,
        doVideoOffer,
        doVideoAnswer
    } = props

    const dispatch = useDispatch();

    const fetchMyDataCall = useCallback(
        () => dispatch(fetchMyData),
        [dispatch, fetchMyData]
    );

    useEffect(() => {
        fetchMyDataCall()
    }, [fetchMyDataCall]);

    const query = messagesRef
        .where("room", "==", location.state.id)
        .orderBy("createdAt")
        .limitToLast(24)

    const chatStep = useSelector((state) => state.WebChatReducer.chatStep)
    const videoStep = useSelector((state) => state.WebChatReducer.videoStep)
    const me = useSelector((state) => state.MeReducer.Me)
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

    // const handleUpdate = (notif, username) => {

    //     if (notif) {
    //         switch (notif.type) {
    //             case 'offer':
    //                 // accepte offer , decline offer
    //                 setConnectedUser(notif.from)
    //                 listenToConnectionEvents(localconnection, username, notif.from, remoteVideoRef, doCandidate)
    //                 sendAnswer(localconnection, localstream, notif, doAnswer, username)
    //                 break;

    //             case 'answer':
    //                 // start call
    //                 setConnectedUser(notif.from)
    //                 startCall(localconnection, notif)
    //                 break;
    //             case 'candidate':

    //                 // idk
    //                 addCandidate(localconnection, notif)
    //                 break;
    //             default:
    //                 break;
    //         }
    //     }
    // }

    const handleChatStep = () => {
        switch (chatStep) {
            case 1:
                return <ChatScreen
                    gradientMessage
                    participants={location.state}
                    SendMessage={SendMessage}
                    messages={snapshot}
                    me={me}
                    loading={loading}
                />;
            case 2:
                return <AudioChat />;
            case 3:
                return <VideoChat
                    doVideoOffer={doVideoOffer}
                    doCandidate={doCandidate}
                    participants={location.state}
                    videoStep={videoStep}
                    doAnswer={doVideoAnswer}
                    notif={me}
                    me={me}
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
        goToChatRoom,
        goToVideoRoom,
        fetchMyData,
        SendMessage,
        doVideoOffer,
        doCandidate,
        doVideoAnswer
    })(WebChat);


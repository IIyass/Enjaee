import React, { useState } from 'react'
import * as Style from './style'
import Jolie from '../../Illustration/Joli.png'
import Input from '../UI/AuthInput'
import ChatButton from '../UI/chatButton'
import ChatScreen from '../ChatScreen';
import AudioChat from '../AudioChat'
import VideoChat from '../VideoChat';
const Video = () => {
    const [chatStep, setChatStep] = useState(1);

    const handleChatStep = () => {
        switch (chatStep) {
            case 1:
                return <ChatScreen gradientMessage />;
            case 2:
                return <AudioChat />;
            case 3:
                return <VideoChat />;

        }
    }

    return (
        <Style.Wrapper>
            <Style.LeftContainer>
                <div id="image">
                    <img src={Jolie} />
                </div>
                <Input required type="text" name="name" icon="blackcontact" placeholder="Full name" />
                <Input required type="text" name="name" icon="blackcontact" placeholder="Developers" />
                <ChatButton onClick={() => setChatStep(1)} icon="chat" border="#53A8CB" color="#53A8CB" text="#fff">Chat</ChatButton>
                <ChatButton onClick={() => setChatStep(2)} icon="audio" border="#000" color="#fff" text="#000" >Audio Call</ChatButton>
                <ChatButton onClick={() => setChatStep(3)} icon="video" border="#000" color="#fff" text="#000"  >Video Call</ChatButton>
                <ChatButton icon="clear" border="#000" color="#fff" text="#000" >Clear Chat</ChatButton>
                <ChatButton icon="block" border="#000" color="#fff" text="#000" >Block</ChatButton>
            </Style.LeftContainer>
            <Style.RightContainer>
                {handleChatStep()}
            </Style.RightContainer>
        </Style.Wrapper >
    )
}

export default Video;
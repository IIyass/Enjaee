import React, { useEffect, useState } from 'react'
import * as Style from './style'
import Jolie from '../../Illustration/Joli.png'
import Input from '../UI/AuthInput'
import ChatButton from '../UI/chatButton'
import ChatScreen from '../ChatScreen';
import AudioChat from '../AudioChat'
import VideoChat from '../VideoChat';
const Video = (props) => {

    const { location } = props
    const [chatStep, setChatStep] = useState(1);

    useEffect(() => {
        setChatStep(location.state)
    }, [location.state])

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
                <Input required type="text" name="name" icon="success" placeholder="Developers" />
                <ChatButton onClick={() => setChatStep(1)} icon={chatStep === 1 ? "chatWhite" : "chat"} border={chatStep === 1 ? "#53A8CB" : "#000"} color={chatStep === 1 ? "#53A8CB" : "fff"} text={chatStep === 1 ? "#fff" : "000"}>Chat</ChatButton>
                <ChatButton onClick={() => setChatStep(2)} icon={chatStep === 2 ? "audioWhite" : "audio"} border={chatStep === 2 ? "#53A8CB" : "#000"} color={chatStep === 2 ? "#53A8CB" : "fff"} text={chatStep === 2 ? "#fff" : "000"} >Audio Call</ChatButton>
                <ChatButton onClick={() => setChatStep(3)} icon={chatStep === 3 ? "videoWhite" : "video"} border={chatStep === 3 ? "#53A8CB" : "#000"} color={chatStep === 3 ? "#53A8CB" : "fff"} text={chatStep === 3 ? "#fff" : "000"}  >Video Call</ChatButton>
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
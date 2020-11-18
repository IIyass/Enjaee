import React, { useContext } from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'
import ChatOnline from '../ChatOnline'
import { Chat } from '../../Provider/ChatProvider'
const TeamChat = () => {
    const { step } = useContext(Chat);
    return (
        <Style.Wrapper as={Container}>
            { step === 4 ? <ChatOnline /> : <Body PageType="TeamChatPage" />}
        </Style.Wrapper >
    )
}

export default TeamChat;
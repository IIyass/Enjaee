import React from 'react'
import * as Style from './style'
import { Container } from '../Common/Body'
import Body from '../Body'
const TeamChat = () => {

    return (
        <Style.Wrapper as={Container}>
            <Body PageType="TeamChatPage" />
        </Style.Wrapper >
    )
}

export default TeamChat;
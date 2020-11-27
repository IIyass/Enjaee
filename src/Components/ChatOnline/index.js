import React from 'react'
import * as Style from './style';
import { Container } from '../Common/Body'
import ChatScreen from '../ChatScreen'
const ChatOnline = () => {

    return (
        <Style.Wrapper as={Container}>
            <Style.LeftSide>
                <Style.AvatarCard>
                    <div>
                        <p>Temporary
                        Chat</p>
                    </div>
                </Style.AvatarCard>
            </Style.LeftSide>
            <ChatScreen />
        </Style.Wrapper>
    )
}

export default ChatOnline;
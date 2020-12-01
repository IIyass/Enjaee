import React from 'react'
import * as Style from './style';
import { BodyContainer } from '../Common/Body'
import ChatScreen from '../ChatScreen'
const ChatOnline = () => {

    return (
        <Style.Wrapper as={BodyContainer}>
            <Style.LeftSide>
                <Style.AvatarCard>
                    <div>
                        <p>Temporary
                        Chat</p>
                    </div>
                </Style.AvatarCard>
            </Style.LeftSide>
            <Style.RightContainer>
                <ChatScreen />
            </Style.RightContainer>
        </Style.Wrapper>
    )
}

export default ChatOnline;
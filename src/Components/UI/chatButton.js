import React from 'react'
import * as Style from './style'
import video from '../../Illustration/Icon/Web/Regular/VideoCall.svg'
import chat from '../../Illustration/Icon/Web/Regular/Chat.svg'
import audio from '../../Illustration/Icon/Web/Regular/AudioCall.svg'
import block from '../../Illustration/Icon/Web/Action/Block.svg'
import clear from '../../Illustration/Icon/Web/Action/Clear.svg'

const ChatButton = ({ color, icon, border, children, ...props }) => {
    const IconHandler = () => {
        switch (icon) {
            case 'chat':
                return <img className="Icon" src={chat} />;
            case 'audio':
                return <img className="Icon" src={audio} />;
            case 'block':
                return <img className="Icon" src={block} />;
            case 'clear':
                return <img className="Icon" src={clear} />;
            case 'video':
                return <img className="Icon" src={video} />;

        }
    }
    return (

        <Style.ChatButton textColor={props.text} color={color} borderColor={border}  {...props}>
            {IconHandler()}
            {children}
        </Style.ChatButton>

    )
}

export default ChatButton;
import React from 'react'
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
const Card = ({ picture, name, detail }) => {
    return (
        <Style.Container>
            <img src={picture} />
            <Style.Description>
                <Style.PersonalInfo>
                    <h1>{name}</h1>
                    <span>{detail}</span>
                </Style.PersonalInfo>
                <Style.IconContainer>
                    <img src={ChatIcon} />
                    <img src={AudioCall} />
                    <img src={Stroke} />
                    <img src={More} />
                </Style.IconContainer>
            </Style.Description>

        </Style.Container>
    )
}

export default Card;
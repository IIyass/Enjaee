import React, { useState, useEffect } from 'react'
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
const Card = ({ picture, name, detail, index }) => {
    const [openModel, setOpenModel] = useState(20);
    const [opacity, setOpacity] = useState(true);

    useEffect(() => {

    }, [openModel])

    const ModelShow = () => {
        return <Style.ModalContainer>
            <p>Would you like send chat request to Jolie Price.</p>
            <Style.ButtonContainer>
                <button className="red">No</button>
                <button className="green">Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>

    }
    return (

        <Style.Wrapper index={openModel}>
            <img src={picture} />
            <Style.Description>
                <Style.PersonalInfo>
                    <h1>{name}</h1>
                    <span>{detail}</span>
                </Style.PersonalInfo>
                <Style.IconContainer>
                    <img src={ChatIcon} onClick={() => setOpenModel(index)} />
                    <img src={AudioCall} />
                    <img src={Stroke} />
                    <img src={More} />
                </Style.IconContainer>
            </Style.Description>
            {index === openModel && ModelShow()}

        </Style.Wrapper>
    )
}

export default Card;
import React, { useState, useEffect } from 'react'
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
import Success from '../../Illustration/Success.svg'
const Card = ({ picture, name, detail, index, cardCred }) => {
    const [openModel, setOpenModel] = useState();
    const [selectImg, setSelectImg] = useState();

    useEffect(() => {

    }, [openModel, cardCred])

    const ModelShow = () => {
        return <Style.ModalContainer>
            <p>Would you like send chat request to Jolie Price.</p>
            <Style.ButtonContainer>
                <button className="red">No</button>
                <button className="green">Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>

    }

    const handleSelectedCard = () => {
        if (cardCred.includes(index)) {
            return true;
        }
    };

    return (
        <Style.Wrapper selectImg={handleSelectedCard()} index={openModel}>
            <div id="img">
                <img className="profil" src={picture} />
                {handleSelectedCard() && <img className="icon" src={Success} />}
            </div>

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
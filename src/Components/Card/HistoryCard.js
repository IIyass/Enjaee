import React, { useState, useContext } from 'react'
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import More from '../../Illustration/More.svg'
import CardHero from './CardHero'
import Model from '../Model'
import SortInput from '../UI/ProfilSelector'
import { FooterButton } from '../UI/FooterButton'
import PinInput from 'react-pin-input'
import { Chat } from '../../Provider/ChatProvider/ChatProvider'

const TemChatCard = ({ name, picture, index, id, detail, HandleChat }) => {

    const { next, step } = useContext(Chat);

    const [open, setOpen] = useState(false);
    const [pin, setPin] = useState({
        1: '', 2: "", 3: '', 3: ""
    })

    const handleCloseModal = () => {
        setOpen(false)
        document.body.style.overflow = "scroll";
    }
    const Card = () => {
        switch (step) {
            case 1:
                return <Style.CardTemModel>
                    <Style.CardWrapper>
                        <h1>Welcome to Temporary Chat</h1>
                        <span>Select your duration for Temporary chat</span>
                        <SortInput width="275px" border="1px solid #4A4A4A" />
                        <FooterButton onClick={() => next()}>Generate PIn</FooterButton>
                    </Style.CardWrapper>
                </ Style.CardTemModel>
            case 2:
                return <Style.CardTemModel>
                    <Style.CardWrapper>
                        <span>
                            Please Create Pin and Share
                            with Tara Alwyn & Enjoy Messanger
                            Services on Enjoee
                     </span>
                        <PinInput
                            length={4}
                            secret
                            onChange={(value, index) => setPin(prev => ({ ...prev, [index]: value }))}
                            type="numeric"
                            inputMode="number"
                            style={{ width: '275px', height: "40px" }}
                            inputStyle={{ borderRadius: "5px", borderColor: "#47525D", height: "100%" }}
                            inputFocusStyle={{ borderColor: 'blue' }}
                            onComplete={(value, index) => setPin(prev => ({ ...prev, [index]: value }))}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                        <FooterButton onClick={() => next()}>Send</FooterButton>
                    </Style.CardWrapper>
                </ Style.CardTemModel>
            case 3:
                return <Style.CardTemModel>
                    <Style.CardWrapper>
                        <span>
                            Hello, Tara alwyn, please enter as
                            generated by sam for temporary chat
                            enjoee messagner service on ENJOEE
                        </span>
                        <PinInput
                            length={4}
                            secret
                            onChange={(value, index) => setPin(prev => ({ ...prev, [index]: value }))}
                            type="numeric"
                            inputMode="number"
                            style={{ width: '275px', height: "40px" }}
                            inputStyle={{ borderRadius: "5px", borderColor: "#47525D", height: "100%" }}
                            inputFocusStyle={{ borderColor: 'blue' }}
                            onComplete={(value, index) => setPin(prev => ({ ...prev, [index]: value }))}
                            autoSelect={true}
                            regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                        />
                        <FooterButton onClick={() => next()}>Done</FooterButton>
                    </Style.CardWrapper>
                </ Style.CardTemModel>

        }


    }

    return (
        <>
            <Model onClose={handleCloseModal}
                open={open} >{Card()}</Model>
            <Style.CardContainer >
                <div onClick={() => setOpen(true)}>
                    <CardHero picture={picture} index={index} id={id} />
                </div>
                <Style.Description>
                    <Style.PersonalInfo>
                        <h1>{name}</h1>
                        <span>{detail}</span>
                    </Style.PersonalInfo>
                    <Style.IconContainer>
                        <img src={ChatIcon} onClick={() => HandleChat()} />
                        <img src={More} />
                    </Style.IconContainer>
                </Style.Description>
            </Style.CardContainer>

        </>
    )
}

export default TemChatCard;
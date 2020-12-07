import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import * as Style from './style'
import ChatIcon from '../../Illustration/Chat.svg'
import AudioCall from '../../Illustration/AudioCall.svg'
import More from '../../Illustration/More.svg'
import Stroke from '../../Illustration/Stroke.svg'
import CardHero from './CardHero'
import ChatCard from './HistoryCard'
import OTPSucess from '../../Illustration/SuccessOtp.svg'
import PinInput from 'react-pin-input'

const Card = ({ picture, name, detail, index, id, locked, history, CardType, setOpenModel, openModel }) => {

    const [toggle, setToggle] = useState(false);
    const [ModelSteps, setModelSteps] = useState(1);
    const [pin, setPin] = useState({
        1: '', 2: "", 3: '', 3: ""
    })

    let historyLocation = useHistory();


    const CancelSendRequest = () => {
        setToggle(false)
        setOpenModel(undefined)
    }

    const ModelShow = (text) => {
        return <Style.ModalContainer>
            <p>{text}</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => CancelSendRequest()}>No</button>
                <button className="green" onClick={() => setModelSteps(ModelSteps + 1)}>Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>
    }

    const OtpModelShow1 = () => {
        return (
            <Style.OTPModalContainer>
                <img src={OTPSucess} />
                <span>Request Accepted</span>
                <p>Please generate password and share with Benson M.  enjoy Messenger services on ENJOEE</p>
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
                <Style.ButtonContainer>
                    <button className="otp" onClick={() => setModelSteps(ModelSteps + 1)}>Yes</button>
                </Style.ButtonContainer>
            </Style.OTPModalContainer>
        )
    }

    const OtpModelShow2 = () => {
        return (
            <Style.OTPModalContainer>
                <p>Request accepted by Jolie and generated password for you.</p>
                <p>enter password and enjoy messangr services on ENJOEE</p>
                <span>Password - 1734</span>
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
                <Style.ButtonContainer>
                    <button className="otp" onClick={() => CancelSendRequest()}>Yes</button>
                </Style.ButtonContainer>
            </Style.OTPModalContainer>
        )
    }


    const HandleModelShow = () => {
        switch (ModelSteps) {
            case 1:
                return ModelShow('Would you like send chat request to Jolie Price.');
            case 2:
                return ModelShow('Jolie Price you received Chat request fron jhon William');
            case 3:
                return OtpModelShow1()
            case 4:
                return OtpModelShow2()
        }
    }


    const HandleVideo = () => {
        historyLocation.push({
            pathname: '/alert',
            state: 3
        });
    }

    const HandleAudio = () => {
        historyLocation.push({
            pathname: '/alert',
            state: 2
        });
    }

    const HandleChat = () => {
        historyLocation.push({
            pathname: '/alert',
            state: 1
        });
    }



    const renderSingleCard = () => {
        switch (CardType) {
            case 'history':
                return <Style.CardContainer >
                    <CardHero name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <div><img src={ChatIcon} onClick={() => HandleChat()} /><span>{history?.message}</span></div>
                            <div><img src={AudioCall} onClick={() => HandleAudio()} /><span>{history?.call}</span></div>
                            <div><img src={Stroke} onClick={() => HandleVideo()} /><span>{history?.video}</span></div>
                            <div><img src={More} /> </div>
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
            case 'group':
                return <Style.CardContainer>
                    <CardHero TickedCard name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <div> <img src={ChatIcon} onClick={() => HandleChat()} /></div>
                            <div>  <img src={AudioCall} onClick={() => HandleAudio()} /></div>
                            <div> <img src={Stroke} onClick={() => HandleVideo()} /></div>
                            <div><img src={More} onClick={(e) => setToggle(!toggle)} />{toggle && <ul><li>Admin</li><li>Delete</li><li>Exit Group</li></ul>} </div>
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
            case 'chat':
                return <ChatCard name={name} history={history} locked={locked} picture={picture} index={index} id={id} detail={detail} setOpenModel={setOpenModel} HandleChat={HandleChat} />

            case 'details':
                return <Style.CardContainer>
                    <CardHero name={name} picture={picture} index={index} id={id} detail={detail} />
                    <Style.Description>
                        <Style.PersonalInfo>
                            <h1>{name}</h1>
                            <span>{detail}</span>
                        </Style.PersonalInfo>
                        <Style.IconContainer>
                            <img src={ChatIcon} onClick={() => locked && setOpenModel(index)} />
                            <img src={AudioCall} onClick={() => locked && setOpenModel(index)} />
                            <img src={Stroke} onClick={() => locked && setOpenModel(index)} />
                            <img src={More} />
                        </Style.IconContainer>
                    </Style.Description>
                </Style.CardContainer>
        }
    }


    return (
        <Style.Wrapper>
            {renderSingleCard()}
            {index === openModel && HandleModelShow()}
        </Style.Wrapper>
    )
}

export default Card;
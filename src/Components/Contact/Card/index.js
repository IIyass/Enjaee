import React, { useEffect, useState } from 'react'
import * as Style from './style'
import ChatIcon from '../../../Illustration/Chat.svg'
import AudioCall from '../../../Illustration/AudioCall.svg'
import More from '../../../Illustration/More.svg'
import Stroke from '../../../Illustration/Stroke.svg'
import OTPSucess from '../../../Illustration/SuccessOtp.svg'
import Jhon from '../../../Illustration/Henry.png'
import PinInput from 'react-pin-input'


const Card = (props) => {

    const { picture = Jhon,
        name,
        detail = "CEO Web Messanger",
        index,
        id,
        setReceiveNotifiation,
        locked,
        showNotificationModel,
        sendNotificationToContact,
        MyNotification,
        sentNotificationStep,
        openNotificationModel,
        showInvitationModel,
        CancelSendRequest } = props;


    useEffect(() => {
        if (MyNotification.includes(id)) {
            showInvitationModel(index);
        }
    }, [MyNotification.includes(id)])

    const [ModelSteps, setModelSteps] = useState(1);
    const [pin, setPin] = useState({
        1: '', 2: "", 3: '', 3: ""
    })

    const ModelShow = (text) => {
        return <Style.ModalContainer>
            <p>{text}</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => CancelSendRequest(id)}>No</button>
                <button className="green" onClick={() => sendNotificationToContact(id)}>Yes</button>
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
        switch (sentNotificationStep) {
            case 1:
                return ModelShow(`Would you like send chat request to ${name}.`);
            case 2:
                return ModelShow(`Jolie Price you received Chat request fron ${name}.`);
            case 3:
                return OtpModelShow1()
            case 4:
                return OtpModelShow2()
        }
    }



    return (
        <Style.Wrapper>
            <Style.CardContainer>
                <img className="profil" src={picture} />
                <Style.Description>
                    <Style.PersonalInfo>
                        <h1>{name}</h1>
                        <span>{detail}</span>
                    </Style.PersonalInfo>
                    <Style.IconContainer>
                        <img src={ChatIcon} onClick={() => showNotificationModel(index)} />
                        <img src={AudioCall} onClick={() => showNotificationModel(index)} />
                        <img src={Stroke} onClick={() => showNotificationModel(index)} />
                        <img src={More} />
                    </Style.IconContainer>
                </Style.Description>
            </Style.CardContainer>
            {index === openNotificationModel && HandleModelShow()}
        </Style.Wrapper>
    )
}

export default React.memo(Card);
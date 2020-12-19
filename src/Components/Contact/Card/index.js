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
        showGeneratingCodeModel,
        AccepteSentRequest,
        me,
        showNotificationModel,
        sendNotificationToContact,
        MyNotification,
        sentNotificationStep,
        openNotificationModel,
        showInvitationModel,
        CancelSendRequest,
        generateSecurityCode,
        AcceptedRequest,
        confirmationCode,
        showConfirmationCode,
        requestSucceed } = props;

    const [code, setCode] = useState()

    const checkNotificationType = () => {
        if (AcceptedRequest.includes(id)) {
            showGeneratingCodeModel(index);
        } else {
            if (MyNotification.includes(id)) {
                showInvitationModel(index);
            } else {
                if (confirmationCode.filter(e => {
                    setCode(e.code)
                    return e.Id === id
                }).length > 0) {
                    showConfirmationCode(index);
                }
            }
        }
    }


    useEffect(() => {
        checkNotificationType();
    }, [MyNotification.includes(id)])

    const [pin, setPin] = useState('')
    const [confirmPin, setConfirmPin] = useState('')
    const OtpModelShow1 = () => {
        return (
            <Style.OTPModalContainer>
                <img src={OTPSucess} />
                <span>Request Accepted</span>
                <p>Please generate password and share with {name} enjoy Messenger services on ENJOEE</p>
                <PinInput
                    length={4}
                    secret
                    onChange={(value, index) => setPin(prev => ({ ...prev, [index]: value }))}
                    type="numeric"
                    inputMode="number"
                    style={{ width: '275px', height: "40px" }}
                    inputStyle={{ borderRadius: "5px", borderColor: "#47525D", height: "100%" }}
                    inputFocusStyle={{ borderColor: 'blue' }}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <Style.ButtonContainer>
                    <button className="otp" onClick={() => generateSecurityCode(pin[3], id)} > Yes</button>
                </Style.ButtonContainer>
            </Style.OTPModalContainer>
        )
    }

    const OtpModelShow2 = () => {
        return (
            <Style.OTPModalContainer>
                <p>Request accepted by {name} and generated password for you.</p>
                <p>enter password and enjoy messangr services on ENJOEE</p>
                <span>Password -{code}</span>
                <PinInput
                    length={4}
                    secret
                    onChange={(value, index) => setConfirmPin(prev => ({ ...prev, [index]: value }))}
                    type="numeric"
                    inputMode="number"
                    style={{ width: '275px', height: "40px" }}
                    inputStyle={{ borderRadius: "5px", borderColor: "#47525D", height: "100%" }}
                    inputFocusStyle={{ borderColor: 'blue' }}
                    onComplete={(value, index) => setConfirmPin(prev => ({ ...prev, [index]: value }))}
                    autoSelect={true}
                    regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
                <Style.ButtonContainer>
                    <button className="otp" onClick={() => insertCodeForMyRequest()}>Yes</button>
                </Style.ButtonContainer>
            </Style.OTPModalContainer>
        )
    }

    const sendNotificationRequest = () => {
        return <Style.ModalContainer>
            <p>{`Would you like send chat request to ${name}.`}</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => cancleNotificationRequest(id)}>No</button>
                <button className="green" onClick={() => sendNotificationToContact(id)}>Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>

    };


    const receiveNotificationRequest = () => {
        return <Style.ModalContainer>
            <p>{`${me.name} you received Chat request fron ${name}.`}</p>
            <Style.ButtonContainer>
                <button className="red" onClick={() => cancleNotificationRequest(id)}>No</button>
                <button className="green" onClick={() => accepteNotificationRequest()}>Yes</button>
            </Style.ButtonContainer>
        </Style.ModalContainer>

    };


    const cancleNotificationRequest = () => {
        return CancelSendRequest(id)
    };
    const accepteNotificationRequest = () => {
        return AccepteSentRequest(index, id)
    };
    const generateCodeForNotificationRequest = () => {
        return OtpModelShow1()
    };
    const insertCodeForMyRequest = () => {
        if (code === confirmPin[3]) {
            return requestSucceed()
        }

    };

    const HandleModelShow = () => {
        switch (sentNotificationStep) {
            case 1:
                return sendNotificationRequest();
            case 2:
                return receiveNotificationRequest();
            case 3:
                return generateCodeForNotificationRequest()
            case 4:
                return OtpModelShow2();
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
import React, { useState } from 'react'
import * as Style from './style'
import Card from './Card'

const DumbContact = (props) => {

    const [receiveNotification, setReceiveNotifiation] = useState(false)

    const {
        sendNotificationToContact,
        ContactData,
        sentNotificationStep,
        MyNotification,
        openNotificationModel,
        showNotificationModel,
        showInvitationModel,
        CancelSendRequest,
        me,
        AccepteSentRequest,
        generateSecurityCode,
        showGeneratingCodeModel,
        confirmationCode,
        showConfirmationCode,
        AcceptedRequest,
        requestSucceed
    } = props;



    return (
        <Style.CardLayout index={undefined}>
            {ContactData.map(({ picture, name, detail, profile, history, id }, index) => {
                return <Card
                    openNotificationModel={openNotificationModel}
                    sendNotificationToContact={sendNotificationToContact}
                    showNotificationModel={showNotificationModel}
                    MyNotification={MyNotification}
                    sentNotificationStep={sentNotificationStep}
                    showInvitationModel={showInvitationModel}
                    setReceiveNotifiation={setReceiveNotifiation}
                    CancelSendRequest={CancelSendRequest}
                    AcceptedRequest={AcceptedRequest}
                    showGeneratingCodeModel={showGeneratingCodeModel}
                    showConfirmationCode={showConfirmationCode}
                    confirmationCode={confirmationCode}
                    requestSucceed={requestSucceed}
                    me={me}
                    AccepteSentRequest={AccepteSentRequest}
                    generateSecurityCode={generateSecurityCode}
                    index={index}
                    locked={profile}
                    name={name}
                    picture={picture}
                    detail={detail}
                    history={history}
                    id={id} />
            })
            }
        </Style.CardLayout>
    )

}

export default DumbContact;
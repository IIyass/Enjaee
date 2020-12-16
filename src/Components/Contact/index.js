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
        CancelSendRequest

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
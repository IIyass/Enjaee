import React, { useState } from 'react';
import * as Style from './style';
import Card from './Card';

const DumbContact = (props) => {
  const [, setReceiveNotifiation] = useState(false);

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
    requestSucceed,
    GoToPrivateRoom
  } = props;

  return (
    <Style.CardLayout index={undefined}>
      {ContactData.map(({
        picture, name, detail, profile, history, id, friends,
      }, index) => <Card
          key={id}
          friends={friends}
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
          GoToPrivateRoom={GoToPrivateRoom}
          id={id}
        />
      )}
    </Style.CardLayout>
  );
};

export default DumbContact;

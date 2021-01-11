import React, { useState } from 'react';
import * as Style from './style';
import Card from './Card';
import Jhon from '../../Illustration/Henry.png';

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
        avatar, name, profilView, status,
        privateChat,
        PictureView, profile, history, id, friends,
      }, index) => id !== me.id &&
      profilView &&
        <Card
          key={id}
          PrivateChat={privateChat}
          PictureView={PictureView}
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
          picture={avatar ? avatar : Jhon}
          status={status}
          history={history}
          GoToPrivateRoom={GoToPrivateRoom}
          id={id}
        />
      )}
    </Style.CardLayout>
  );
};

export default DumbContact;

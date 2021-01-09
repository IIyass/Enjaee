import React from 'react';
import CardLayout from './style';
import Card from './Card';

const DumbTeamChatComponent = ({ TeamData, MyTeamChatNotification,
  NextCode, step, next, me, ConfirmationModel,
  goToFirstStep, GoToPrivateRoom, CloseModal, open, AddContactToTeamChat, OpenModeL, teamChatContact }) => (

  <CardLayout>
    {TeamData.map(({
      picture, name, detail, profile, history, id,
    }, index) => (
      me.id !== id && <Card
        key={id}
        step={step}
        next={next}
        index={index}
        locked={profile}
        name={name}
        picture={picture}
        detail={detail}
        history={history}
        NextCode={NextCode}
        goToFirstStep={goToFirstStep}
        me={me}
        OpenModeL={OpenModeL}
        CloseModal={CloseModal}
        ConfirmationModel={ConfirmationModel}
        MyTeamChatNotification={MyTeamChatNotification}
        AddContactToTeamChat={AddContactToTeamChat}
        teamChatContact={teamChatContact}
        open={open}
        GoToPrivateRoom={GoToPrivateRoom}
        id={id}
      />
    ))}
  </CardLayout>
);

export default DumbTeamChatComponent;

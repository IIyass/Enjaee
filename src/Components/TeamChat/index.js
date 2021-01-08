import React from 'react';
import CardLayout from './style';
import Card from './Card';

const DumbTeamChatComponent = ({ TeamData, MyTeamChatNotification,
  NextCode, step, next, me, ConfirmationModel,
  goToFirstStep, AddContactToTeamChat, teamChatContact }) => (

  <CardLayout>
    {TeamData.map(({
      picture, name, detail, profile, history, id,
    }, index) => (
      <Card
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
        ConfirmationModel={ConfirmationModel}
        MyTeamChatNotification={MyTeamChatNotification}
        AddContactToTeamChat={AddContactToTeamChat}
        teamChatContact={teamChatContact}
        id={id}
      />
    ))}
  </CardLayout>


);

export default DumbTeamChatComponent;

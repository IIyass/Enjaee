import React from 'react';
import CardLayout from './style';
import Card from './Card';

const DumbTeamChatComponent = ({ TeamData, MyTeamChat,
  NextCode, step, next, me, ConfirmationModel }) => (

  <CardLayout>
    {TeamData.map(({
      picture, name, detail, profile, history, id,
    }, index) => (
      <Card
        step={step}
        next={next}
        index={index}
        locked={profile}
        name={name}
        picture={picture}
        detail={detail}
        history={history}
        NextCode={NextCode}
        me={me}
        ConfirmationModel={ConfirmationModel}
        MyTeamChat={MyTeamChat}
        id={id}
      />
    ))}
  </CardLayout>


);

export default DumbTeamChatComponent;

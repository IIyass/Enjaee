import React from 'react';
import CardLayout from './style';
import ChatOnline from './ChatOnline';
import Card from './Card';

const DumbTeamChatComponent = ({ TeamData, step, next }) => (
  step === 4 ? <ChatOnline />
    : (
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
            id={id}
          />
        ))}
      </CardLayout>
    )

);

export default DumbTeamChatComponent;

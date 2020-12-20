import React, { useEffect } from 'react';
import * as Style from '../style';
import Card from './Card';

const GroupPerson = (props) => {
  const { team, getTeamById } = props;

  useEffect(() => {
    getTeamById();
  });
  console.log(team);
  return (
    <Style.CardLayout>
      {team.map(({
        picture, name, detail, profile, history, id,
      }, index) => (
        <Card
          index={index}
          locked={profile}
          name={name}
          picture={picture}
          detail={detail}
          history={history}
          id={id}
        />
      ))}
    </Style.CardLayout>
  );
};

export default GroupPerson;

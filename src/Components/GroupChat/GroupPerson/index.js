import React from 'react';
import * as Style from '../style';
import Card from './Card';
import Jhon from '../../../Illustration/Henry.png';
import useUserData from '../../../hooks/useUserData'

const GroupPerson = (props) => {
  const { team } = props;
  const [userMetaData] = useUserData(team);

  return (
    <Style.CardLayout>
      {userMetaData.map(({
        name,
        detail = "CEO Hitachy",
        profile,
        history,
        id,
      }, index) => (
        <Card
          key={id}
          index={index}
          locked={profile}
          name={name}
          picture={Jhon}
          detail={detail}
          history={history}
          id={id}
        />
      ))}
    </Style.CardLayout>
  );
};

export default React.memo(GroupPerson);

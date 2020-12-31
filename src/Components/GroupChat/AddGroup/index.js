import React from 'react';
import { AddCardContainer, CardLayout } from '../style';
import jhon from '../../../Illustration/primarybackground.svg';
import picture from '../../../Illustration/groupicon.svg';
import Card from './Card';

const AddCard = (props) => {
  const {
    AllGroups,
    goToGroupDetail,
    addGroupAction
  } = props;

  return (
    <CardLayout>
      <AddCardContainer>
        <div onClick={() => addGroupAction()}>
          <img alt="profil" src={picture} />
        </div>
        <h1>Create Group</h1>
      </AddCardContainer>
      {AllGroups.map(({
        name, id
      }) => (
        <div onClick={() => goToGroupDetail(id)} key={id}>
          <Card
            name={name}
            picture={jhon}
          />
        </div>
      ))}
    </CardLayout>
  );
};

export default AddCard;

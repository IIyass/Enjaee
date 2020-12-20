import React from 'react';
import { AddCardContainer, CardLayout } from '../style';
import picture from '../../../Illustration/groupicon.svg';

const AddCard = (props) => {
  const { addGroupAction } = props;
  return (
    <CardLayout>
      <AddCardContainer>
        <div onClick={() => addGroupAction()}>
          {' '}
          <img src={picture} />
        </div>
        <h1>Create Group</h1>
      </AddCardContainer>
    </CardLayout>
  );
};

export default AddCard;

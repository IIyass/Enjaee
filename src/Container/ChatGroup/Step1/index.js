import React from 'react';
import AddCard from '../../../Components/GroupChat/AddGroup';

const Step1 = (props) => {
  const { addGroupAction } = props;
  return <AddCard addGroupAction={addGroupAction} />;
};
export default Step1;

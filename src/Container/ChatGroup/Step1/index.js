import React, { useEffect } from 'react';
import AddCard from '../../../Components/GroupChat/AddGroup';

const Step1 = (props) => {

  const {
    addGroupAction,
    getAllGroups,
    AllGroups,
    loadGroup,
    goToGroupDetail,
    goToPrivateRoom
  } = props;

  useEffect(() => {
    getAllGroups()
  }, [getAllGroups])

  return loadGroup ? <h1>Loading ...</h1> :
    <AddCard
      AllGroups={AllGroups}
      addGroupAction={addGroupAction}
      goToGroupDetail={goToGroupDetail}
      goToPrivateRoom={goToPrivateRoom}
    />;
};
export default Step1;

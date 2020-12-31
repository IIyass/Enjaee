import React, { useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as Style from './style';
import BodyContainer from '../../Common/Body';
import AddGroup from './Step1';
import Contact from './Step2';
import GroupContact from './Step3';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestoreFirebase } from '../../firebaseService/FirebaseIndex';
import {
  addGroupAction,
  removeGroupPerson,
  selectGroupPerson,
  getGroupById,
  backToContact,
  addNewGroup,
  getAllGroups,
  goToGroupDetail,
  showAllGroup,
  AddMember,
  updateMember
} from '../../store/GroupChat/action';

const userRef = firestoreFirebase.collection('/users');

const ChatGroup = (props) => {

  const {
    addNewGroup,
    addGroupAction,
    selectGroupPerson,
    removeGroupPerson,
    getGroupById,
    getAllGroups,
    goToGroupDetail,
    showAllGroup,
    AddMember,
    updateMember
  } = props;

  const dispatch = useDispatch();

  const query2 = userRef;

  const step = useSelector((state) => state.GroupChatReducer.step)
  const update = useSelector((state) => state.GroupChatReducer.update)
  const GroupPerson = useSelector((state) => state.GroupChatReducer.GroupPerson)
  const Team = useSelector((state) => state.GroupChatReducer.Team)
  const loadTeam = useSelector((state) => state.GroupChatReducer.loadTeam)
  const groupId = useSelector((state) => state.GroupChatReducer.groupId)
  const AllGroups = useSelector((state) => state.GroupChatReducer.allGroups)
  const loadGroup = useSelector((state) => state.GroupChatReducer.loadGroup)
  const groupError = useSelector((state) => state.GroupChatReducer.groupError);

  const [AllUsers, loading, error] = useCollectionData(query2, { idField: 'id' });

  const getAllGroupsCall = useCallback(() => {
    dispatch(getAllGroups)
  }, [dispatch, getAllGroups])

  const AddMemberCall = useCallback(() => {
    dispatch(AddMember)
  }, [AddMember, dispatch])

  const handleSteps = () => {
    switch (step) {
      case 1: return <AddGroup
        getAllGroups={getAllGroupsCall}
        loadGroup={loadGroup}
        AllGroups={AllGroups}
        addGroupAction={addGroupAction}
        goToGroupDetail={goToGroupDetail}
      />;
      case 2: return (
        loading ? <h1>Loading ...</h1> :
          <Contact
            GroupPerson={GroupPerson}
            removeGroupPerson={removeGroupPerson}
            contact={AllUsers}
            selectGroupPerson={selectGroupPerson}
            addNewGroup={addNewGroup}
            groupError={groupError}
            showAllGroup={showAllGroup}
            update={update}
            updateMember={updateMember}
            team={Team}
            groupId={groupId}
          />
      );
      case 3: return (
        <GroupContact
          Group={Team}
          AddMember={AddMemberCall}
          team={Team}
          getGroupById={getGroupById}
          groupId={groupId}
          loadTeam={loadTeam}
          showAllGroup={showAllGroup}
        />
      );
      default: return <AddGroup addGroupAction={addGroupAction} />;
    }
  };
  return (
    <Style.Wrapper as={BodyContainer}>
      {handleSteps()}
    </Style.Wrapper>
  );
};


export default connect(null,
  {
    getGroupById,
    addGroupAction,
    selectGroupPerson,
    removeGroupPerson,
    backToContact,
    addNewGroup,
    getAllGroups,
    goToGroupDetail,
    showAllGroup,
    AddMember,
    updateMember
  })(ChatGroup);

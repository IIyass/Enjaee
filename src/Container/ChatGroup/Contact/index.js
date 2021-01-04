import React, { useState, useEffect, useCallback } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { Wrapper } from '../style';
import BodyContainer from '../../../Common/Body';
import DumbMyContact from '../../../Components/GroupChat/Contact';
import { GroupBar, ButtonContainer } from '../style';
import SearchInput from '../../../Components/UI/SearchInput';
import Rectangle380 from '../../../Illustration/Rectangle380.svg';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firestoreFirebase } from '../../../firebaseService/FirebaseIndex';
import {
  selectGroupPerson,
  removeGroupPerson,
  addNewGroup,
  updateMember,
  getGroupById,
} from '../../../store/GroupChat/action';
import { fetchMyData } from '../../../store/Me/action';

const userRef = firestoreFirebase.collection('/users');

const Contact = (props) => {

  const {
    selectGroupPerson,
    removeGroupPerson,
    addNewGroup,
    updateMember,
    getGroupById,
    fetchMyData
  } = props;

  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewGroup(name)
  };

  const dispatch = useDispatch();

  const fetchMyDataCall = useCallback(
    () => dispatch(fetchMyData),
    [dispatch, fetchMyData]
  );

  const query2 = userRef;

  const GroupPerson = useSelector((state) => state.GroupChatReducer.GroupPerson)
  const groupMember = useSelector((state) => state.GroupChatReducer.groupMember)
  const groupError = useSelector((state) => state.GroupChatReducer.groupError);
  const me = useSelector((state) => state.MeReducer.Me);
  const [AllUsers, loading, error] = useCollectionData(query2, { idField: 'id' });

  useEffect(() => {
    fetchMyDataCall();
  }, [fetchMyDataCall])

  const GetActualMember = () => {
    return AllUsers.filter(e => {
      return !groupMember.members.includes(e.id)
    })
  }

  useEffect(() => {
    if (props.match.params.id !== undefined) {
      getGroupById(props.match.params.id)
    }
  }, [getGroupById, props.match.params.id])

  return (
    loading ? <h1>LOaidng ...</h1> :
      <Wrapper as={BodyContainer}>
        <GroupBar>
          <img alt="add" src={Rectangle380} />
          <form onSubmit={handleSubmit}>
            <SearchInput required placeholder="Group name"
              value={props.match.params.id !== undefined ? groupMember.name : name}
              disabled={props.match.params.id !== undefined ? true : false}
              onChange={(e) => setName(e.target.value)} name="groupname" />
            {groupError}
            <ButtonContainer>
              {props.match.params.id === undefined ? <button >Done</button> :
                <button onClick={() => updateMember(props.match.params.id)}>
                  Update Member
                  </button>}
            </ButtonContainer>
          </form>
          <SearchInput placeholder="Search" name="Search" iconSearch />
        </GroupBar>

        <DumbMyContact
          selectGroupPerson={selectGroupPerson}
          removeGroupPerson={removeGroupPerson}
          contact={props.match.params.id !== undefined ? GetActualMember() :
            AllUsers}
          GroupPerson={GroupPerson}
          me={me}
        />
      </Wrapper>
  );
};

export default connect(null,
  {
    selectGroupPerson,
    removeGroupPerson,
    addNewGroup,
    updateMember,
    getGroupById,
    fetchMyData
  })(Contact);

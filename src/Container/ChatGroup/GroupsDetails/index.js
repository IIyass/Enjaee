import React, { useEffect, useCallback } from 'react';
import BodyContainer from '../../../Common/Body';
import { GroupBar, Wrapper, ButtonContainer } from '../style';
import { connect, useSelector, useDispatch } from 'react-redux';
import SearchInput from '../../../Components/UI/SearchInput';
import Rectangle380 from '../../../Illustration/Rectangle380.svg';
import DumbGroupPerson from '../../../Components/GroupChat/GroupPerson';
import {
  getGroupById,
  AddMember,
  showAllGroup,
} from '../../../store/GroupChat/action';

const GroupDetail = (props) => {
  const {
    AddMember,
    getGroupById,
    loadGroupMember,
    showAllGroup,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const dispatch = useDispatch();
  const GroupMember = useSelector((state) => state.GroupChatReducer.groupMember)

  useEffect(() => {
    getGroupById(props.match.params.id)
  }, [getGroupById, props.match.params.id])

  return (
    loadGroupMember ? <h1>Loading  ....</h1> : <Wrapper as={BodyContainer}>
      <GroupBar>
        <img onClick={() => showAllGroup()} alt="search" src={Rectangle380} />
        <form onSubmit={handleSubmit}>
          <SearchInput disabled value={GroupMember.name} name="groupname" />
        </form>
        <SearchInput placeholder="Search" name="Search" iconSearch />
        <ButtonContainer>

          <button onClick={() => AddMember(props.match.params.id)}> Add Member</button>
          <button>Update</button>
        </ButtonContainer>
      </GroupBar>
      <DumbGroupPerson team={GroupMember.members} />
    </Wrapper>

  );
};

export default connect(null,
  {
    getGroupById,
    showAllGroup,
    AddMember,

  })(GroupDetail);
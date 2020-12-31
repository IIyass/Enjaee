import React, { useEffect } from 'react';
import { GroupBar, ButtonContainer } from '../style';
import SearchInput from '../../../Components/UI/SearchInput';
import Rectangle380 from '../../../Illustration/Rectangle380.svg';
import DumbGroupPerson from '../../../Components/GroupChat/GroupPerson';

const Step3 = (props) => {
  const {
    AddMember,
    team,
    getGroupById,
    groupId,
    loadTeam,
    showAllGroup,
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    getGroupById(groupId)
  }, [getGroupById, groupId])

  return (
    loadTeam ? <h1>Loading  ....</h1> : <>
      <GroupBar>
        <img onClick={() => showAllGroup()} alt="search" src={Rectangle380} />
        <form onSubmit={handleSubmit}>
          <SearchInput disabled value={team.name} name="groupname" />
        </form>
        <SearchInput placeholder="Search" name="Search" iconSearch />
        <ButtonContainer>

          <button onClick={() => AddMember()}> Add Member</button>
          <button>Update</button>
        </ButtonContainer>
      </GroupBar>
      <DumbGroupPerson team={team.members} />
    </>

  );
};
export default React.memo(Step3);

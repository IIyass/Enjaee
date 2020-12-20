import React, { useState } from 'react';
import { GroupBar, ButtonContainer } from '../style';
import SearchInput from '../../../Components/UI/SearchInput';
import Rectangle380 from '../../../Illustration/Rectangle380.svg';
import DumbGroupPerson from '../../../Components/GroupChat/GroupPerson';

const Step3 = (props) => {
  const {
    Group, backToContact, team, getTeamById,
  } = props;

  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <GroupBar>
        <img src={Rectangle380} />
        <form onSubmit={handleSubmit}>
          <SearchInput disabled value={Group.name} name="groupname" />
        </form>
        <SearchInput placeholder="Search" name="Search" iconSearch />
        <ButtonContainer>
          <button onClick={() => backToContact()}> Add Member</button>
          <button>Update</button>
        </ButtonContainer>
      </GroupBar>
      <DumbGroupPerson getTeamById={getTeamById} team={team} />
    </>
  );
};
export default Step3;

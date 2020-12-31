import React, { useState } from 'react';
import DumbMyContact from '../../../Components/GroupChat/Contact';
import { GroupBar, ButtonContainer } from '../style';
import SearchInput from '../../../Components/UI/SearchInput';
import Rectangle380 from '../../../Illustration/Rectangle380.svg';

const Step2 = (props) => {
  const {
    contact,
    selectGroupPerson,
    GroupPerson,
    removeGroupPerson,

    addNewGroup,
    groupError,
    showAllGroup,
    update,
    updateMember,
    team,
    groupId
  } = props;

  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewGroup(name)
  };

  const GetActualMember = () => {
    return contact.filter(e => {
      return !team.members.includes(e.id)
    })
  }
  console.log(groupId)
  return (
    <>
      <GroupBar>
        <img onClick={() => showAllGroup()} alt="add" src={Rectangle380} />
        <form onSubmit={handleSubmit}>
          {team.name ? <SearchInput disabled required placeholder="Group name" value={team.name} name="groupname" />
            : <SearchInput required placeholder="Group name" value={name} onChange={(e) => setName(e.target.value)} name="groupname" />}
          {groupError}
          <ButtonContainer>
            {update ? <button onClick={() => updateMember(groupId)} >Update Members</button> :
              <button  >Done</button>
            }
          </ButtonContainer>
        </form>
        <SearchInput placeholder="Search" name="Search" iconSearch />
      </GroupBar>

      <DumbMyContact
        selectGroupPerson={selectGroupPerson}
        removeGroupPerson={removeGroupPerson}
        contact={update ? GetActualMember() : contact}
        GroupPerson={GroupPerson}
      />
    </>
  );
};
export default Step2;

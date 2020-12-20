import React, { useState } from 'react';
import DumbMyContact from '../../../Components/GroupChat/Contact';
import { GroupBar, ButtonContainer } from '../style';
import SearchInput from '../../../Components/UI/SearchInput';
import Rectangle380 from '../../../Illustration/Rectangle380.svg';

const Step2 = (props) => {
  const {
    contact,
    addGroupByName,
    selectGroupPerson,
    GroupPerson,
    removeGroupPerson,
    Group,
  } = props;

  const [name, setName] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addGroupByName(name);
  };
  return (
    <>
      <GroupBar>
        <img src={Rectangle380} />
        <form onSubmit={handleSubmit}>
          {Group.name ? <SearchInput disabled required placeholder="Group name" value={Group.name} name="groupname" />
            : <SearchInput required placeholder="Group name" value={name} onChange={(e) => setName(e.target.value)} name="groupname" />}
          <ButtonContainer>
            <button>Done</button>
          </ButtonContainer>
        </form>
        <SearchInput placeholder="Search" name="Search" iconSearch />
      </GroupBar>

      <DumbMyContact
        selectGroupPerson={selectGroupPerson}
        removeGroupPerson={removeGroupPerson}
        contact={contact}
        GroupPerson={GroupPerson}
      />
    </>
  );
};
export default Step2;

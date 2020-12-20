import React from 'react';
import { connect } from 'react-redux';
import * as Style from './style';
import BodyContainer from '../../Common/Body';
import AddGroup from './Step1';
import Contact from './Step2';
import GroupContact from './Step3';
import {
  addGroupAction,
  removeGroupPerson,
  selectGroupPerson,
  addGroupByName,
  backToContact,
  getTeamById,
} from '../../store/GroupChat/action';
import MockData from '../../Data/ContactMockData';

const ChatGroup = (props) => {
  const {
    Group,
    addGroupByName,
    addGroupAction,
    GroupPerson,
    selectGroupPerson,
    removeGroupPerson,
    backToContact,
    getTeamById,
    Team,
    step,
  } = props;
  const handleSteps = () => {
    switch (step) {
      case 1: return <AddGroup addGroupAction={addGroupAction} />;
      case 2: return (
        <Contact
          GroupPerson={GroupPerson}
          removeGroupPerson={removeGroupPerson}
          contact={MockData}
          selectGroupPerson={selectGroupPerson}
          addGroupByName={addGroupByName}
          Group={Group}
        />
      );
      case 3: return (
        <GroupContact
          Group={Group}
          backToContact={backToContact}
          team={Team}
          getTeamById={getTeamById}
        />
      );
    }
  };
  return (
    <Style.Wrapper as={BodyContainer}>
      {handleSteps()}
    </Style.Wrapper>

  );
};
const mapStateToProps = (state) => ({
  step: state.GroupChatReducer.step,
  GroupPerson: state.GroupChatReducer.GroupPerson,
  Group: state.GroupChatReducer.Group,
  Team: state.GroupChatReducer.Team,
});

export default connect(mapStateToProps,
  {
    addGroupAction,
    selectGroupPerson,
    removeGroupPerson,
    addGroupByName,
    backToContact,
    getTeamById,
  })(ChatGroup);

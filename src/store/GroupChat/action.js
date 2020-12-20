import {
  ADD_GROUP_ACTION,
  BACK_TO_CONTACT,
  GET_TEAM_BY_ID, SELECT_GROUP_PERSON,
  REMOVE_GROUP_PERSON,
  ADD_GROUP_BY_NAME,
} from './actionType';
import MockData from '../../Data/ContactMockData';

export const addGroupAction = () => async (dispatch) => {
  dispatch({
    type: ADD_GROUP_ACTION,
  });
};

export const selectGroupPerson = (PersonId) => async (dispatch) => {
  dispatch({
    type: SELECT_GROUP_PERSON,
    payload: PersonId,
  });
};

export const removeGroupPerson = (PersonId) => async (dispatch, getState) => {
  const GroupPersonState = getState().GroupChatReducer.GroupPerson;
  const index = GroupPersonState.indexOf(PersonId);
  dispatch({
    type: REMOVE_GROUP_PERSON,
    payload: index,
  });
};

export const addGroupByName = (name) => async (dispatch) => {
  dispatch({
    type: ADD_GROUP_BY_NAME,
    payload: name,
  });
};

export const backToContact = () => async (dispatch) => {
  dispatch({
    type: BACK_TO_CONTACT,
  });
};

export const getTeamById = () => async (dispatch, getState) => {
  const GroupPersonState = getState().GroupChatReducer.Group.team;
  const TeamInfo = MockData.filter(({ id }) => GroupPersonState.includes(id));
  console.log(TeamInfo);
  dispatch({
    type: GET_TEAM_BY_ID,
    payload: TeamInfo,
  });
};

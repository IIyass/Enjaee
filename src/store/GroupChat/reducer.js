const INIT_STATE = {
  step: 1,
  GroupPerson: [],
  Group: { name: '', team: [] },
  Team: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'ADD_GROUP_ACTION':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'SELECT_GROUP_PERSON':
      return {
        ...state,
        GroupPerson: [...state.GroupPerson, action.payload],
      };
    case 'REMOVE_GROUP_PERSON':
      return {
        ...state,
        GroupPerson: [...state.GroupPerson.slice(0, action.payload), ...state.GroupPerson.slice(action.payload + 1)],
      };
    case 'ADD_GROUP_BY_NAME':
      return {
        ...state,
        step: state.step + 1,
        Group: {
          name: action.payload,
          team: state.GroupPerson,
        },
      };
    case 'BACK_TO_CONTACT':
      return {
        ...state,
        step: state.step - 1,
      };
    case 'GET_TEAM_BY_ID':
      return {
        ...state,
        Team: [...action.payload],
      };

    default:
      return state;
  }
};

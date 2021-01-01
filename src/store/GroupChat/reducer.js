const INIT_STATE = {
  step: 1,
  GroupPerson: [],
  Team: {
    members: [],
    name: ""
  },
  groupId: "",
  loadTeam: true,
  allGroups: [],
  loadGroup: true,
  groupError: '',
  update: false,
};

const GroupReducer = (state = INIT_STATE, action) => {
  switch (action.type) {

    case 'UPDATE_MEMBER':
      return {
        ...state,
        step: 3,
        groupId: action.payload,
        GroupPerson: []
      };

    case 'ADD_MEMBERS':
      return {
        ...state,
        step: 2,
        update: true,
        groupError: '',
      };

    case 'SHOW_ALL_GROUP':
      return {
        ...state,
        step: 1,
        groupId: ''
      };

    case 'GO_TO_GROUP_DETAIL':
      return {
        ...state,
        step: 3,
        groupId: action.payload
      };

    case 'ADD_GROUP_ACTION':
      return {
        ...state,
        step: 2,
        groupId: '',
        GroupPerson: [],
        Team: {
          members: [],
          name: ""
        },
        groupError: '',
        update: false
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
        groupId: action.payload,

      };

    case 'BACK_TO_CONTACT':
      return {
        ...state,
        step: 1,
      };
    case 'GET_GROUP_BY_ID':
      return {
        ...state,
        Team: {
          members: action.payload.participants,
          name: action.payload.name
        },
        loadTeam: false
      };

    case 'GET_ALL_GROUPS':
      return {
        ...state,
        allGroups: [...action.payload],
        loadGroup: false
      };

    case 'GROUP_ERROR':
      return {
        ...state,
        groupError: action.payload
      };

    default:
      return state;
  }
};

export default GroupReducer;
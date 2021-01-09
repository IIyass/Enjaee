const INIT_STATE = {
  step: 1,
  DataStepOne: {},
  open: false
};

const TeamReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case 'BACK_TO_PREVIOUS_STEP':
      return {
        ...state,
        step: state.step - 1,
      };
    case 'GO_TO_NEXT_STEP':
      return {
        ...state,
        step: state.step + 1,
      };
    case 'GO_TO_LAST_STEP':
      return {
        ...state,
        step: -1,
        open: false
      };
    case 'GO_TO_SECOND_STEP':
      return {
        ...state,
        step: state.step + 1,
        DataStepOne: action.payload
      };
    case 'CONFIRMATION_STEP':
      return {
        ...state,
        step: 3,
      };
    case 'GO_TO_FIRST_STEP':
      return {
        ...state,
        step: 1,
      };
    case 'FINISH_STEP':
      return {
        ...state,
        step: undefined,
        open: false
      };
    case 'OPEN_MODEL':
      return {
        ...state,
        open: true
      };
    case 'CLOSE_MODEL':
      return {
        ...state,
        open: false
      };
    default:
      return state;
  }
};

export default TeamReducer;
const INIT_STATE = {
    step: 1
}

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'BACK_TO_PREVIOUS_STEP':
            return {
                ...state,
                step: state.step - 1
            }
        case 'GO_TO_NEXT_STEP':
            return {
                ...state,
                step: state.step + 1
            }
        default:
            return state;
    }
};
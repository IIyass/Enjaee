const INIT_STATE = {
    Me: [],
    Loading: true
}

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'GET_MY_DATA':
            return {
                ...state,
                Me: action.payload,
                Loading: false
            }
        default:
            return state;
    }
};
const INIT_STATE = {
    Me: [],
    Loading: true,
    MyNotification: []
}

export default (state = INIT_STATE, action) => {

    switch (action.type) {
        case 'GET_MY_DATA':
            return {
                ...state,
                Me: action.payload,
                Loading: false
            }
        case 'CHECK_MY_NOTIFICATION':
            return {
                ...state,
                MyNotification: action.payload

            }
        default:
            return state;
    }
};
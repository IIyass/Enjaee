const INIT_STATE = {
    Me: {},
    Loading: true,
    MyNotification: [],
    AcceptedRequest: [],
    confirmationCode: []
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

        case 'GET_MY_ACCEPTED_REQUEST':
            return {
                ...state,
                AcceptedRequest: action.payload
            }
        case 'GET_MY_CONFIRMATION_REQUEST':
            return {
                ...state,
                confirmationCode: action.payload
            }
        default:
            return state;
    }
};
const INIT_STATE = {
    chatStep: 1,
    MyMessages: {},
    Loading: true,
    videoStep: 1
};

const WebChatReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GO_CHAT_ROOM':
            return {
                ...state,
                chatStep: 1
            };
        case 'GO_AUDIO_ROOM':
            return {
                ...state,
                chatStep: 2
            };
        case 'GO_VIDEO_ROOM':
            return {
                ...state,
                chatStep: 3
            };
        case 'GET_MY_MESSAGES':
            return {
                ...state,
                MyMessages: action.payload,
                Loading: false
            }
        case 'LEAVE_CALL':
            return {
                ...state,
                chatStep: 1
            }
        default:
            return state;
    }
};

export default WebChatReducer;

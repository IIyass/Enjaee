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
        case 'VIDEO_CALL_OFFER':
            return {
                ...state,
                videoStep: 2
            }
        case 'VIDEO_CALL_CONDIDATE':
            return {
                ...state,
                videoStep: 2
            }
        case 'VIDEO_CALL_ANSWER':
            return {
                ...state,
                videoStep: 2
            }
        case 'START_CALL':
            return {
                ...state,
                videoStep: 2
            }
        default:
            return state;
    }
};

export default WebChatReducer;

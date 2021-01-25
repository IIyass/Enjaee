const INIT_STATE = {
    MyHistory: [],
    Loading: true,


};

const HistoryReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'GET_MY_HISTORY':
            return {
                ...state,
                MyHistory: action.payload,
                Loading: false,
            };

        default:
            return state;
    }
};

export default HistoryReducer;
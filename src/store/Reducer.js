import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import TeamChatReducer from '../store/TeamChat/reducer'
import GroupChatReducer from '../store/GroupChat/reducer'
import ContactReducer from '../store/Contact/reducer'
import MeReducer from '../store/Me/reducer'




const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    TeamChatReducer,
    GroupChatReducer,
    ContactReducer,
    MeReducer
});
export default createRootReducer
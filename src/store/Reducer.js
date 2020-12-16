import { combineReducers } from 'redux';
import TeamChatReducer from '../store/TeamChat/reducer'
import GroupChatReducer from '../store/GroupChat/reducer'
import ContactReducer from '../store/Contact/reducer'
import MeReducer from '../store/Me/reducer'
export default combineReducers({
    TeamChatReducer,
    GroupChatReducer,
    ContactReducer,
    MeReducer
});
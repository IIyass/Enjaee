import { combineReducers } from 'redux';
import TeamChatReducer from '../store/TeamChat/reducer'
import GroupChatReducer from '../store/GroupChat/reducer'
export default combineReducers({
    TeamChatReducer,
    GroupChatReducer
});
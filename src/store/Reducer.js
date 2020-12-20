import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import TeamChatReducer from './TeamChat/reducer';
import GroupChatReducer from './GroupChat/reducer';
import ContactReducer from './Contact/reducer';
import MeReducer from './Me/reducer';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  TeamChatReducer,
  GroupChatReducer,
  ContactReducer,
  MeReducer,
});
export default createRootReducer;

import { combineReducers} from 'redux';
import kanbanReducer from './kanbanReducer';
import addCardReducer from './addCardReducer';

export default combineReducers({
  cards: kanbanReducer,
  cups: addCardReducer
});
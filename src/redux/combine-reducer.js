import { combineReducers } from 'redux';
import { CardRenderer } from './modules/items';

export default combineReducers({
  items: CardRenderer
});

import { combineReducers } from 'redux';
import { CardRenderer } from './modules/items';
import { ProfileRenderer } from './modules/profile';

export default combineReducers({
  items: CardRenderer,
  profile: ProfileRenderer
});


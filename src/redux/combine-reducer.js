import { combineReducers } from 'redux';
import { CardRenderer } from './modules/items';
import { ProfileRenderer } from './modules/profile';
import client from '../config/apolloClient';

export default combineReducers({
  items: CardRenderer,
  profile: ProfileRenderer,
  apollo: client.reducer()
});


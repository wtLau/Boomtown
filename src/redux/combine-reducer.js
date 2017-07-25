import { combineReducers } from 'redux';

import client from '../config/apolloClient';
import { CardRenderer } from './modules/items';
import { ProfileRenderer } from './modules/profile';
import { LoginRenderer } from './modules/auth';

export default combineReducers({
  apollo: client.reducer(),
  items: CardRenderer,
  profile: ProfileRenderer,
  auth: LoginRenderer
});


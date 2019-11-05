import { combineReducers } from 'redux';

import settings from './settings';
import auth from './auth';
import twitch from './twitch';

export default combineReducers({
  settings,
  auth,
  twitch,
})

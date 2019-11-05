import { combineReducers } from 'redux';

import settings from './settings';
import auth from './auth';

export default combineReducers({
  settings,
  auth,
})

import { combineReducers } from 'redux';

import entity from './entity';
import playlist from './playlist';
import search from './search';
import user from './user';


export default combineReducers({
  entity,
  playlist,
  search,
  user,
});

import { createAction } from 'redux-actions';
// set playlistData
export default {
  setData: createAction('setData', payload => payload),
}

import { handleActions } from 'redux-actions';

import EntityActionCreator from '../actions/EntityActionsCreator';

const initialState = {
  playlists: {},
  plays: {},
  songs: {},
  MVs: {},
  albums: {},
};

export default handleActions({
  [EntityActionCreator.getEntity](state, action) {
    return {
      ...state,
      [action.payload.type.name]: {
        [action.payload.type.id]: action.payload.data,
      },
    };
  },
}, initialState);

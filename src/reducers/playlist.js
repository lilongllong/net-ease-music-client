import { handleActions } from 'redux-actions';

import playlistActionsCreator from '../actions/PlaylistActionsCreator';

const initialState = {
  playlist: null,
};

export default handleActions({
  [playlistActionsCreator.setData](state, action) {
    return {
      ...state,
      playlist: action.payload,
    };
  },
}, initialState);

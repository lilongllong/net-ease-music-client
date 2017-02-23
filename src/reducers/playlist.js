import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  playlistId: 'temp',
  entity: null,
};

export default function playlist(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SEARCH_SONG:
    return {
      ...state,
      searchValue: action.data.searchValue,
      searchResult: action.data.searchResult,
    };
  case ActionTypes.SEARCH_NOT_FOUND:
    return {
      ...state,
      searchValue: action.data.searchValue,
      searchResult: [],
      info: action.data.searchResult,
    };
  default:
    return state;
  }
}

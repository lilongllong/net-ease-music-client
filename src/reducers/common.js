import * as ActionTypes from '../constants/ActionTypes';

const initialState = {
  viewState: {
    mainContentShow: 'recommendation',
  },
};

export default function common(state = initialState, action) {
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

import { handleActions } from 'redux-actions';

import searchActionsCreator from '../actions/SearchActionsCreator';

const initialState = {
  searchValue: null,
  searchResult: null,
};

export default handleActions({
  [searchActionsCreator.search](state, action) {
    console.log(state, 'search');
    if (action.payload) {
      return {
        ...state,
        searchValue: action.payload.searchValue,
        searchResult: action.payload.searchResult,
      };
    }
    return state;
  },
}, initialState);

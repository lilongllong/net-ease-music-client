import { handleActions } from 'redux-actions';

import userActionsCreator from '../actions/UserActionsCtreator';

const initialState = {
  userId: '15950580528',
};

export default handleActions({
  [userActionsCreator.login](state, action) {
    return {
      ...state,
      userId: action.payload.userId,
      data: action.payload.data,
    };
  },
}, initialState);

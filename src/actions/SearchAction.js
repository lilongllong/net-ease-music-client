import * as ActionTypes from '../constants/ActionTypes';

export async function defaultAction(init = 'ok') {
  return {
    type: ActionTypes.ACTION_DEFAULT,
  };
}

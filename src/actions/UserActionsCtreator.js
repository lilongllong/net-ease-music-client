import { createAction } from 'redux-actions';
import Service from '../service/Service';

export default {
  login: createAction('search', async (payload) => {
    if (payload) {
      return {
        userId: payload,
        data: {
          username: 'lilonglong',
          sex: '男',
        },
      };
    }
    return {
      userId: payload.keyword,
      data: null,
    };
  }),
  getUserId: createAction('getUserId', () => {
    return '15950580528';
  }),
};

import { createAction } from 'redux-actions';
import Service from '../service/Service';

export default {
  search: createAction('search', async (payload) => {
    if (payload && payload !== '') {
      const searchResult = await Service.getInstance().search(payload);
      if (searchResult) {
        return {
          searchValue: payload,
          searchResult,
        };
      }
      return {
        searchValue: payload,
        searchResult: [],
      };
    }
    return false;
  }),
};

// search: createAction('search', (payload) => {
//   return new Promise((resolve, reject) => {
//     Service.getInstance().search(payload).then((data) => {
//       let result = null;
//       if (data) {
//         result = {
//           searchValue: payload,
//           searchResult: data,
//         };
//       } else {
//         result = {
//           searchValue: payload,
//           searchResult: [],
//         };
//       }
//       resolve(result);
//     }, (error) => {
//       reject(error);
//     });
//   });
// }),

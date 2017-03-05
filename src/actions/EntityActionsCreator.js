import { createAction } from 'redux-actions';
import Service from '../service/Service';

function getEntity(type, id) {
  const serviceInstance = Service.getInstance();
  switch (type) {
  case 'playlists': return serviceInstance.fetchPlaylists(id);
  case 'playlist': return serviceInstance.fetchPlaylistDetails(id);
  case 'song': return serviceInstance.fetchSongDetails(id);
  case 'mv': return serviceInstance.fetchMVInfo(id);
  default: return false;
  }
}

// payload - type / data
export default {
  getEntity: createAction('getEntity', async (payload) => {
    if (payload.data) {
      return payload;
    }
    // lack of data
    const result = await getEntity(payload.type.name, payload.type.id);
    if (result) {
      return {
        data: result,
        type: {
          name: payload.type.name,
          id: payload.type.id,
        },
      };
    }
    // resource request failed
    return false;
  }),
};

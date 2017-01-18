import * as ActionTypes from '../constants/ActionTypes';
import Service from '../service/Service';

export async function search(keyword, type, suggest) {
    if (keyword && keyword !== '') {
        const searchResult = await Service.getInstance().search(keyword, type, suggest);
        if (searchResult) {
            return {
                type: ActionTypes.SEARCH_SONG,
                data: {
                    searchValue: keyword,
                    searchResult,
                },
            };
        }
        return {
            type: ActionTypes.SEARCH_NOT_FOUND,
            data: {
                searchValue: keyword,
                searchResult: '未发现你搜索的歌曲或者',
            },
        };
    }
    return {
        type: ActionTypes.ACTION_STOP,
    };
}

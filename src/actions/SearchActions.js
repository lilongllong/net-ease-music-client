import * as ActionTypes from "../constants/ActionTypes";

export function searchSong(songName)
{
    const searchResult = "research result";
    return { type: ActionTypes.SEARCH_SONG,
             data: {
                 searchValue: songName,
                 searchResult: searchResult
        }
    };
}

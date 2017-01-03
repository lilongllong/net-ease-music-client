import * as ActionTypes from "../constants/ActionTypes";

const initialState = {
    searchValue: null,
    searchResult: null
};

export default function search(state = initialState, action)
{
    switch(action.type)
    {
        case ActionTypes.SEARCH_SONG:
            return {
                ...state,
                searchValue: action.data.searchValue,
                searchResult: action.data.searchResult
            }
        default:
            return state;
    }
}

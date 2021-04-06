import { ADD_MOVIE, DELETE_MOVIE, SET_LOADING } from "./actions";

const defaultState = {};

export function movieReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                [action.movieReducer]: state[action.movieReducer]
            }
        case DELETE_MOVIE:
            return{
                ...state
            }
        default:
            return state;
    }
}

export function loadingReducer (state = false, action) {
    switch(action.type) {
        case SET_LOADING:
            return true
        default:
            return state
    }
}
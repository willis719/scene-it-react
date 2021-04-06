import { ADD_MOVIE, DELETE_MOVIE, SET_LOADING } from "./actions";

// const defaultState = {};

export function movieReducer(state = [], action) {
    switch (action.type) {
        case ADD_MOVIE:
            return action.payload.moviesArray
            
        case DELETE_MOVIE:
            return{
            
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
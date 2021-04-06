export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const SET_LOADING = "SET_LOADING";

export function createAddMovie(moviesArray) {
    return {
        type: ADD_MOVIE,
        payload: {
            moviesArray
        }
    }
}

export function createDeleteMovie() {
    return {
        type: DELETE_MOVIE
    }
}

export function loading() {
    return {
        type: SET_LOADING
    }
}
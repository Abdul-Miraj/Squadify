import { ADD_SONG, DELETE_SONG } from './actionTypes';

export const addSong = (songInfo) => {
    return {
        type: ADD_SONG,
        songId: songInfo
    }
};

export const deleteSong = (key) => {
    return {
        type: DELETE_SONG,
        key: key
    }
};
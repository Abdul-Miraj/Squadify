import { ADD_SONG, DELETE_SONG, CHANGE_SONG, PAUSE_SONG } from './actionTypes';

export const addSong = (songInfo) => {
    return {
        type: ADD_SONG,
        songInfo: songInfo
    }
};

export const deleteSong = (tarKey) => {
    return {
        type: DELETE_SONG,
        key: tarKey
    }
};

export const changeSong = (position) => {
    return {
        type: CHANGE_SONG,
        position: position
    }
};

export const pauseSong = (tarKey) => {
    return {
        type: PAUSE_SONG,
        key: tarKey
    }
};
import { ADD_SONG, DELETE_SONG, CHANGE_SONG } from "../actions/actionTypes";

const initialState = {
  queue: [
    {
      key: "1d02kalf",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Instances",
      artistNames: ["Lias"],
      albumName: "Give Me One More",
      spotifyURI: "spotify:track:5H0OPOKDVbZtD9pPTFKRuF",
      playing: true
    },
    {
      key: "kora2i9ad",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Yes Indeed",
      artistNames: ["Lil Baby", "Drake"],
      albumName: "Yes Indeed",
      spotifyURI: "spotify:track:1wsf1YFQSYND45y0GzJmf7",
      playing: false
    },
    {
      key: "21a3s1d2",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Betrayed",
      artistNames: ["Lil Xan"],
      albumName: "Betrayed",
      spotifyURI: "spotify:track:6NWl2m8asvH83xjuXVNsuG",
      playing: false
    }
  ],
  position: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        queue: state.queue.concat([action.songInfo])
      };
    case DELETE_SONG:
      return {
        ...state,
        queue: state.queue.filter(song => {
          return song.key !== action.key;
        })
      };

    case CHANGE_SONG:
      const updatedQueue = state.queue.slice();
      updatedQueue[state.position].playing = false;
      updatedQueue[action.position].playing = true;

      return {
        ...state,
        queue: updatedQueue,
        position: action.position
      };
    default:
      return state;
  }
};

export default reducer;

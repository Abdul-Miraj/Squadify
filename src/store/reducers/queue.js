import { ADD_SONG, DELETE_SONG } from "../actions/actionTypes";

const initialState = {
  queue: [
    {
      key: "1d02kalf",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Instances",
      artistNames: ["Lias"],
      albumName: "Give Me One More"
    },
    {
      key: "kora2i9ad",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Yes Indeed",
      artistNames: ["Lil Baby", "Drake"],
      albumName: "Yes Indeed"
    },
    {
      key: "21a3s1d2",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Betrayed",
      artistNames: ["Lil Xan"],
      albumName: "Betrayed"
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
    default:
      return state;
  }
};

export default reducer;

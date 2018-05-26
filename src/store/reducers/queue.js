import { ADD_SONG, DELETE_SONG, CHANGE_SONG } from "../actions/actionTypes";

const initialState = {
  queue: [
    {
      key: "spotify:track:5H0OPOKDVbZtD9pPTFKRuF",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Instances",
      artistNames: ["Lias"],
      albumName: "Give Me One More"
    },
    {
      key: "spotify:track:1wsf1YFQSYND45y0GzJmf7",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Yes Indeed",
      artistNames: ["Lil Baby", "Drake"],
      albumName: "Yes Indeed"
    },
    {
      key: "spotify:track:6NWl2m8asvH83xjuXVNsuG",
      songImage:
        "https://i.scdn.co/image/d0186ad64df7d6fc5f65c20c7d16f4279ffeb815",
      songName: "Betrayed",
      artistNames: ["Lil Xan"],
      albumName: "Betrayed"
    }
  ],
  position: -1
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      return {
        ...state,
        queue: state.queue.concat([action.songInfo])
      };
    case DELETE_SONG:
      const currPos = state.position;
      const queueLength = state.queue.length - 1;

      const deletePos = state.queue.findIndex(song => {
        if (song.key === action.key) {
          return song;
        }
      });

      let updatedPos = -1;

      // when the song being deleted comes before the song being played
      if (currPos > deletePos) {
        updatedPos = currPos - 1;
      }

      // when the current song playing is the one that is being deleted
      else if (currPos === deletePos) {
        // when there are more songs after the one being deleted
        if (queueLength > deletePos) {
          updatedPos = deletePos;
        }

        // when the song being deleted is the last item in the queue and there is more then 1 song in the queue
        else if (queueLength === deletePos && queueLength > 0) {
          updatedPos = deletePos - 1;
        }
      }

      // when the current song playing comes before the song being deleted
      else if (currPos < deletePos) {
        updatedPos = currPos;
      }

      return {
        ...state,
        queue: state.queue.filter(song => {
          return song.key !== action.key;
        }),
        position: updatedPos
      };

    case CHANGE_SONG:
      const updatedQueue = state.queue.map((song, index) => {
        if (index === state.position) {
          song.playing = false;
        } else if (index === action.position) {
          song.playing = true;
        }
        return song;
      });

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

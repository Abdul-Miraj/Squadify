import { ADD_SONG, DELETE_SONG, CHANGE_SONG } from "../actions/actionTypes";

const initialState = {
  queue: [],
  position: -2
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG:
      let newPosition = state.position;

      if (state.position === -2) {
        newPosition = state.queue.length;
      }

      return {
        ...state,
        queue: state.queue.concat([action.songInfo]),
        position: newPosition
      };
    case DELETE_SONG:
      const currPos = state.position;
      const queueLength = state.queue.length - 1;

      const deletePos = state.queue.findIndex(song => {
        if (song.key === action.key) {
          return song;
        }
      });

      let updatedPos = -2;

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

      const newPos = action.position;

      if(((newPos <= state.queue.length - 1) && (newPos >= 0)) || (newPos === -2)){
        return {
          ...state,
          position: newPos
        };
      }

    default:
      return state;
  }
};

export default reducer;

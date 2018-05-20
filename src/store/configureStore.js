import { createStore, combineReducers } from 'redux';

// Reducers
import queueReducer from './reducers/queue';

const rootReducer = combineReducers({
    queue: queueReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
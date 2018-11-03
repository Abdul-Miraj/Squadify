import { createStore, combineReducers } from 'redux';

// Reducers
import queueReducer from './reducers/queue';
import connectionsReducer from './reducers/connections';

const rootReducer = combineReducers({
    queue: queueReducer,
    connections: connectionsReducer
});

const configureStore = () => {
    return createStore(rootReducer);
};

export default configureStore;
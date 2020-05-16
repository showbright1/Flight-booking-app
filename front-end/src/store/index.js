import { createStore, combineReducers } from 'redux';
import flight from './flight';

const rootReducer = combineReducers({flight});
const store = createStore(rootReducer);

export default store;
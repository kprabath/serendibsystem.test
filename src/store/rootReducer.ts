import {combineReducers} from 'redux';
import applicationReducer from './reducers/application.reducer';

export default combineReducers({application: applicationReducer});

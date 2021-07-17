import changeTheNumber from './upDown';
import { combineReducers } from 'redux';

const rootReducer = combineReducers(
    {changeTheNumber}//explore this way of passing prop:value in an object
);

export default rootReducer;
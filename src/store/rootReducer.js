import { combineReducers } from 'redux';
import categories from './categories/reducer';

export const rootReducer = combineReducers({
    categories
});
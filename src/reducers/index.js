import { combineReducers } from 'redux';
import rolesReducer from './rolesReducer';

export default combineReducers({ roles: rolesReducer });
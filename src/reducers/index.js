import {combineReducers} from 'redux';
import rolesReducer from './rolesReducer';
import roleMethodsReducer from './roleMethodsReducer';
import currentRoleReducer from './currentRoleReducer';

export default combineReducers({
    roles: rolesReducer,
    roleMethods: roleMethodsReducer,
    currentRoleId: currentRoleReducer
});
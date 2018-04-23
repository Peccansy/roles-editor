import * as types from './types';

let idCounter = 1;

export const deleteRole = (id) => {
    return {type: types.ROLE_DELETE, id}
};

export const addRole = (name) => {
    return {type: types.ROLE_ADD, name, id: idCounter++};
};

export const bindMethod = (roleId, methodId) => {
    return {type: types.METHOD_BIND, roleId, methodId};
};

export const unbindMethod = (roleId, methodId) => {
    return {type: types.METHOD_UNBIND, roleId, methodId};
};

export const changeCurrentRole = (roleId) => {
    return {type: types.CURRENT_ROLE_CHANGE, roleId}
};

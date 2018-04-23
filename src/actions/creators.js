import * as types from './types';

let idCounter = +localStorage.getItem('idCounter') || 1;

export const deleteRole = (id) => {
    return {type: types.ROLE_DELETE, id}
};

export const addRole = (name) => {
    const nextId = idCounter++;
    try {
        localStorage.setItem('idCounter', `${idCounter}`);
    } catch (e) {
        console.log(e.message);
    }
    return {type: types.ROLE_ADD, name, id: nextId};
};

export const bindMethod = (roleId, methodId) => {
    return {type: types.METHOD_BIND, roleId, methodId};
};

export const unbindMethod = (roleId, methodId) => {
    return {type: types.METHOD_UNBIND, roleId, methodId};
};

export const roleDidRemoved = (roleId) => {
    return {type: types.METHOD_ROLE_DID_REMOVED, roleId}
};

export const changeCurrentRole = (roleId) => {
    return {type: types.CURRENT_ROLE_CHANGE, roleId}
};

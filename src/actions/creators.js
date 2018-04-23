import * as types from './types';

let idCounter = 0;

export const deleteRole = (id) => {
    return {type: types.ROLE_DELETE, id}
};

export const addRole = (name) => {
    return {type: types.ROLE_ADD, name, id: idCounter++};
};

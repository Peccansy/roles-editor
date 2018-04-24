import {createActions, createAction} from 'redux-actions';
import * as types from './types';

let idCounter = +localStorage.getItem('idCounter') || 1;

export const {roleDelete, roleAdd} = createActions({
    [types.ROLE_DELETE]: id => id,
    [types.ROLE_ADD]: (name) => {
        const nextId = idCounter++;
        try {
            localStorage.setItem('idCounter', `${idCounter}`);
        } catch (e) {
            console.log(e.message);
        }
        return {name, id: nextId};
    },
});

export const {methodBind, methodUnbind, methodRoleDidRemoved} = createActions({
    [types.METHOD_BIND]: (roleId, methodId) => ({roleId, methodId}),
    [types.METHOD_UNBIND]: (roleId, methodId) => ({roleId, methodId}),
    [types.METHOD_ROLE_DID_REMOVED]: roleId => roleId,
});
export const currentRoleChange = createAction(types.CURRENT_ROLE_CHANGE, roleId => roleId);

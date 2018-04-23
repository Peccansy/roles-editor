import * as types from './types';

export const deleteRole = (id) => {
    return {type: types.ROLE_DELETE, id}
};
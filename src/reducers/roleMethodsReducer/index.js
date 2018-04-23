import {METHOD_BIND, METHOD_UNBIND} from '../../actions/types'

const initialState = JSON.parse(localStorage.getItem('roleMethods'))|| [];
const roleMethodsReducer = (state = initialState, action) => {
    switch (action.type) {
        case METHOD_BIND:
            return [...state, {roleId: action.roleId, methodId: action.methodId}];
        case METHOD_UNBIND:
            const rm = state.find(({roleId, methodId}) => roleId === action.roleId && methodId === action.methodId);
            return state.filter(roleMethod => roleMethod !== rm);
        default:
            return state;
    }
};

export default roleMethodsReducer;
import {handleActions} from 'redux-actions';
// import {methodBind, methodUnbind} from "../../actions/creators";
import {METHOD_BIND, METHOD_UNBIND, METHOD_ROLE_DID_REMOVED} from '../../actions/types'
//
//
const initialState = JSON.parse(localStorage.getItem('roleMethods')) || [];
// const roleMethodsReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case METHOD_BIND:
//             return [...state, {roleId: action.roleId, methodId: action.methodId}];
//         case METHOD_UNBIND:
//             const rm = state.find(({roleId, methodId}) => roleId === action.roleId && methodId === action.methodId);
//             return state.filter(roleMethod => roleMethod !== rm);
//         case METHOD_ROLE_DID_REMOVED:
//             return state.filter(rm => rm.roleId !== action.roleId);
//         default:
//             return state;
//     }
// };

const roleMethodsReducer = handleActions({
    [METHOD_BIND](state, {payload}) {
        return [...state, {roleId: payload.roleId, methodId: payload.methodId}];
    },
    [METHOD_UNBIND](state, {payload}) {
        const rm = state.find(({roleId, methodId}) => roleId === payload.roleId && methodId === payload.methodId);
        return state.filter(roleMethod => roleMethod !== rm);
    },
    [METHOD_ROLE_DID_REMOVED](state, {payload}) {
        return state.filter(rm => rm.roleId !== payload.roleId);
    }
}, initialState);

export default roleMethodsReducer;
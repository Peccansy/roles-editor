import {roleAdd, roleDelete} from "../../actions/creators";
import {handleActions} from 'redux-actions';

const initialState = JSON.parse(localStorage.getItem('roles')) || [];
// const rolesReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ROLE_ADD:
//             return [...state, {id: action.id, name: action.name}];
//         case ROLE_DELETE:
//             return state.filter(r => r.id !== action.id);
//         default:
//             return state;
//     }
// };
const rolesReducer = handleActions({
    [roleAdd](state, {payload}) {
        const {id, name} = payload;
        return [...state, {id, name}];
    },
    [roleDelete](state, {payload}) {
        return state.filter(r => r.id !== payload);
    }
}, initialState);

export default rolesReducer;
import {ROLE_ADD, ROLE_DELETE} from "../../actions/types";

const initialState = JSON.parse(localStorage.getItem('roles')) || [];
const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROLE_ADD:
            return [...state, {id: action.id, name: action.name}];
        case ROLE_DELETE:
            return state.filter(r => r.id !== action.id);
        default:
            return state;
    }
};

export default rolesReducer;
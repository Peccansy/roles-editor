import {ROLE_DELETE, ROLE_ADD} from "../../actions/types";

const rolesReducer = (state = [], action) => {
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
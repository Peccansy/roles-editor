import { ROLE_DELETE } from "../../actions/types";

const initialState = [{ id: 1, name: 'Бухгалтер' }, { id: 2, name: 'Another' }];

const rolesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ROLE_DELETE:
            return state.filter(r => r.id !== action.id);
        default:
            return state;
    }
};

export default rolesReducer
import {CURRENT_ROLE_CHANGE} from '../../actions/types';

const currentRoleReducer = (state = null, action) => {
    switch (action.type) {
        case CURRENT_ROLE_CHANGE:
            return action.roleId;
        default:
            return state;
    }
};

export default currentRoleReducer;
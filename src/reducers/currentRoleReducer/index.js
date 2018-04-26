import { handleAction } from 'redux-actions';
import {CURRENT_ROLE_CHANGE} from '../../actions/types';

const currentRoleReducer = handleAction(CURRENT_ROLE_CHANGE, (state, {payload}) => payload, null);

export default currentRoleReducer;
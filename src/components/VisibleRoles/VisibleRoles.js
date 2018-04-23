import React from 'react';
import {connect} from 'react-redux';
import RolesList from '../RolesList';
import {deleteRole, changeCurrentRole, roleDidRemoved} from "../../actions/creators";

const mapStateToProps = (state) => {
    return {
        roles: state.roles,
        currentRoleId: state.currentRoleId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemDelete(id) {
            dispatch(deleteRole(id));
            dispatch(changeCurrentRole(null));
            dispatch(roleDidRemoved(id))// clear selection
        },
        onItemClick(id) {
            dispatch(changeCurrentRole(id));
        }
    }
};

const VisibleRoles = connect(mapStateToProps, mapDispatchToProps)(RolesList);

export default VisibleRoles;
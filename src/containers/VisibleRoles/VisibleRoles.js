import React from 'react';
import {connect} from 'react-redux';
import RolesList from '../../components/RolesList/index';
import {currentRoleChange, roleDelete, methodRoleDidRemoved} from "../../actions/creators";

const mapStateToProps = (state) => {
    return {
        roles: state.roles,
        currentRoleId: state.currentRoleId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemDelete(id) {
            dispatch(roleDelete(id));
            dispatch(currentRoleChange(null));
            dispatch(methodRoleDidRemoved(id)); // clear selection
        },
        onItemClick(id) {
            dispatch(currentRoleChange(id));
        }
    }
};

const VisibleRoles = connect(mapStateToProps, mapDispatchToProps)(RolesList);

export default VisibleRoles;
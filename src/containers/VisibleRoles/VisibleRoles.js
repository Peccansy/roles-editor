import React from 'react';
import {connect} from 'react-redux';
import RolesList from '../../components/RolesList/index';
import {currentRoleChange, roleWillDelete} from "../../actions/creators";

const mapStateToProps = (state) => {
    return {
        roles: state.roles,
        currentRoleId: state.currentRoleId,
    }
};

const VisibleRoles = connect(mapStateToProps, { onItemClick: currentRoleChange, onItemDelete: roleWillDelete })(RolesList);

export default VisibleRoles;
import React from 'react';
import { connect } from 'react-redux';
import RolesList from '../RolesList';
import { deleteRole } from "../../actions/creators";

const mapStateToProps = (state) => {
    return {
        roles: state.roles
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onItemDelete: (id) => {
            dispatch(deleteRole(id));
        }
    }
};

const VisibleRoles = connect(mapStateToProps, mapDispatchToProps)(RolesList);

export default VisibleRoles;
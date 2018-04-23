import React from 'react';
import RolesItem from '../RolesItem';
import './RolesList.css';

const RolesList = ({onItemClick, onItemDelete, roles, currentRoleId}) => {
    const items = roles.map(role => {
        return <RolesItem key={role.id} name={role.name} id={role.id} active={currentRoleId === role.id}
                          onItemClick={onItemClick} onDelete={onItemDelete}/>
    });
    return (
        <ul className="roles">
            {items}
        </ul>
    )
};

export default RolesList;

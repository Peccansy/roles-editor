import React from 'react';
import RolesItem from '../RolesItem';

const RolesList = ({ onItemClick, onItemDelete, roles }) => {
    const items = roles.map(role => {
        return <RolesItem key={role.id} name={role.name} id={role.id} onItemClick={onItemClick} onDelete={onItemDelete}/>
    });
    return (
        <ul>
            {items}
        </ul>
    )
};

export default RolesList;

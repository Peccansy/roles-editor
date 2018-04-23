import React from 'react';
import RolesItem from '../RolesItem';

const RolesList = ({ onItemDelete, roles }) => {
    const items = roles.map(role => {
        return <RolesItem key={role.id} name={role.name} id={role.id} onDelete={onItemDelete}/>
    });
    return (
        <ul>
            {items}
        </ul>
    )
};

export default RolesList;

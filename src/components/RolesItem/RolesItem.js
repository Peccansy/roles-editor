import React from 'react';

const RolesItem = ({ name, onDelete, id }) => (<li>{name} <button onClick={() => onDelete(id)}>X</button></li>);

export default RolesItem;

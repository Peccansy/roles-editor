import React from 'react';

const RolesItem = ({name, onDelete, onItemClick, id}) => {
    const onButtonClick = (e) => {
        e.stopPropagation();
        onDelete(id);
    };
    return (
        <li onClick={() => {
            onItemClick(id);
        }}>
            {name}
            <button onClick={onButtonClick}>X</button>
        </li>
    );
};

export default RolesItem;

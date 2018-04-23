import React from 'react';
import './RolesItem.css';

const RolesItem = ({name, onDelete, onItemClick, id, active}) => {
    const onButtonClick = (e) => {
        e.stopPropagation();
        onDelete(id);
    };
    return (
        <li className={active ? 'roles__item roles__item_active' : 'roles__item'} onClick={() => {
            onItemClick(id);
        }}>
            <span className="roles__item-name">{name}</span>
            <button className="roles__item-button" onClick={onButtonClick}>X</button>
        </li>
    );
};

export default RolesItem;

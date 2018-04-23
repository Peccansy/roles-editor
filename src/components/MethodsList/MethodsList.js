import React from 'react';
import MethodsItem from '../MethodsItem';

const isChecked = (itemId, ids) => {
    return ids.some(id => id === itemId);
};

const MethodsList = ({methods, checkedIds, roleId, onCheckChange}) => {
    const items = methods.map(method =>
        (
            <MethodsItem key={method.id}
                         name={method.name}
                         isChecked={isChecked(method.id, checkedIds)}
                         roleId={roleId}
                         id={method.id}
                         onCheckChange={onCheckChange}/>
        ));
    return (
        <ul>
            {items}
        </ul>
    )
};
export default MethodsList;
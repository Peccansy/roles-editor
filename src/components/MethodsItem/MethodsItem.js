import React from 'react';

const MethodsItem = ({name, id, roleId, onCheckChange, isChecked}) => {
  return (
      <div>
          <label>
              <input checked={isChecked} onChange={(e) => onCheckChange(id, roleId, e.target.checked)} type="checkbox"/>
              {name}
          </label>
      </div>
  )
};

export default MethodsItem;
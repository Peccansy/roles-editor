import React from 'react';

const MethodsItem = ({name, id, onCheckChange, isChecked}) => {
  return (
      <div>
          <label>
              <input checked={isChecked} onChange={(e) => onCheckChange(id, e.checked)} type="checkbox"/>
              {name}
          </label>
      </div>
  )
};

export default MethodsItem;
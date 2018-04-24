import React from 'react';
import {connect} from 'react-redux';
import {roleAdd} from "../../actions/creators";
import './AddRole.css'

let AddRole = ({dispatch}) => {
    let input;
    const submitHandler = (e) => {
        e.preventDefault();
        if (input.value === '') {
            return;
        }
        dispatch(roleAdd(input.value));
        input.value = '';
    };
    return (
        <div className="add-role">
            <form action="#" onSubmit={submitHandler}>
                <input ref={node => {
                    input = node;
                }} autoFocus={true} type="text" placeholder="Название..."/>
                <button type="submit">Добавить роль</button>
            </form>
        </div>
    );
};
AddRole = connect()(AddRole);

export default AddRole;
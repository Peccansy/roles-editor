import React from 'react';
import {connect} from 'react-redux';
import {addRole} from "../../actions/creators";

let AddRole = ({dispatch}) => {
    let input;
    const submitHandler = (e) => {
        e.preventDefault();
        if (input.value === '') {
            return;
        }
        dispatch(addRole(input.value));
        input.value = '';
    };
    return (
        <div>
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
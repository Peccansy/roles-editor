import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';
import './index.css';
import App from './App';

const store = createStore(rootReducer);
ReactDOM.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.getElementById('root'));
store.subscribe(() => {
    const {roles, roleMethods} = store.getState();
    const storageRoles = localStorage.getItem('roles');
    const storageRoleMethods = localStorage.getItem('roleMethods');
    if (JSON.stringify(roles) !== storageRoles) {
        try {
            localStorage.setItem('roles', JSON.stringify(roles));
        } catch (e) {
            console.log(e.message);
        }
    }
    if (JSON.stringify(roleMethods) !== storageRoleMethods) {
        try {
            localStorage.setItem('roleMethods', JSON.stringify(roleMethods));
        } catch (e) {
            console.log(e.message);
        }
    }
}); // on store change update localStorage
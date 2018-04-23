import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddRole from './components/AddRole';
import VisibleRoles from './containers/VisibleRoles';
import VisibleMethods from './containers/VisibleMethods';
import './App.css'

class App extends Component {
    render() {
        const methods = this.props.currentRole ? <VisibleMethods/> : null;
        return (
            <div className="wrapper">
                <AddRole/>
                <VisibleRoles/>
                {methods}
            </div>
        );
    }
}

export default connect((state) => ({currentRole: state.currentRoleId}), null)(App);

import React, { Component } from 'react';
import AddRole from './components/AddRole';
import VisibleRoles from './components/VisibleRoles';
import VisibleMethods from './components/VisibleMethods';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <AddRole />
            <VisibleRoles />
            <VisibleMethods />
        </div>
    );
  }
}

export default App;

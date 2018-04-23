import React, { Component } from 'react';
import AddRole from './components/AddRole';
import VisibleRoles from './components/VisibleRoles';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <AddRole />
            <VisibleRoles />
        </div>
    );
  }
}

export default App;

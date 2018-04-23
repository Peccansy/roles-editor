import React, {Component} from 'react';
import {connect} from 'react-redux';
import MethodsList from '../MethodsList';

const mapStateToProps = (state, ownProps) => {
    // const curr = state.selectedRoleId || 1;
    // const checkedIds = state.roleMethods.filter(rm => rm.roleId === curr);
    return Object.assign({checkedIds: []}, ownProps);
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckChange(id) {
            dispatch({type: 'mock'});
            console.log(id);
        }
    }
};

const HOC = connect(mapStateToProps, mapDispatchToProps)(MethodsList);

class VisibleMethods extends Component {
    constructor() {
        super();
        this.state = {methods: []};
    }

    componentDidMount() {
        const methods = [{id: 1, name: 'method'}, {id: 2, name: 'method2'}]; // get data from server, indexedDB etc...
        this.setState({methods});
    }

    render() {
        return <HOC methods={this.state.methods}/>
    }
}

export default VisibleMethods;
import React, {Component} from 'react';
import {connect} from 'react-redux';
import MethodsList from '../../components/MethodsList/index';
import {methodDidCheck} from "../../actions/creators";

const mapStateToProps = (state, ownProps) => {
    const curr = state.currentRoleId;
    let checkedIds = [];
    if (curr !== null) {
        checkedIds = state.roleMethods.filter(rm => rm.roleId === curr).map(rm => rm.methodId);
    }
    return Object.assign({checkedIds, roleId: curr}, ownProps);
};

class VisibleMethods extends Component {
    constructor() {
        super();
        this.state = {methods: []};
    }

    componentDidMount() {
        const methods = [
            {id: 1, name: 'method'},
            {id: 2, name: 'method2'},
            {id: 3, name: 'method3'},
            {id: 4, name: 'method4'}
        ]; // get data from server, indexedDB etc...
        this.setState({methods});
    }

    render() {
        return <MethodsList methods={this.state.methods} {...this.props}/>
    }
}

export default connect(mapStateToProps, {onCheckChange: methodDidCheck})(VisibleMethods);
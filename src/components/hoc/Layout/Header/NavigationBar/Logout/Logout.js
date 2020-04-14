import React, {useEffect} from 'react';
import * as actions from '../../../../../../store'
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom'

const Logout = (props) => {
    useEffect(() => {
        props.logout();
    });

    return (<Redirect to="/"/>);
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(actions.logout())
    }
};

export default connect(null, mapDispatchToProps)(Logout);
import React, {useEffect} from 'react';
import {auth} from '../../../../../../init-firebase';
import {Redirect} from 'react-router';

const Logout = () => {
    useEffect(() => {
        auth.signOut().then(() => {
            console.log('Sign-out successful');
        }).catch(error => {
            console.log('An error happened during sign out', error);
        })
    });

    return (<Redirect to="/"/>);
};

export default Logout;
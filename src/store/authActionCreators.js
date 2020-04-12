import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: err
    }
};

export const signUp = (formData) => {
    return dispatch => axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD53-2WlO3YetKU-nE1-44xT0idJN3ySOI',
        {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
        })
        .then(res => {
            console.log(res);
            dispatch(authSuccess(res))
        })
        .catch(err => {
            console.log(err);
            dispatchEvent(authFail(err));
        });
};

export const signIn = (formData) => {
    return dispatch => axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD53-2WlO3YetKU-nE1-44xT0idJN3ySOI',
        {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
        })
        .then(res => {
            console.log(res);
            dispatch(authSuccess(res))
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err));
        });
};
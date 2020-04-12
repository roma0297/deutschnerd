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
        token: authData.idToken,
        userId: authData.localId
    };
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAILURE,
        error: err
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const setAuthenticationTimeout = (expirationTimeInSeconds) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout())
        }, expirationTimeInSeconds * 1000)
    }
};

export const signUp = (formData) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD53-2WlO3YetKU-nE1-44xT0idJN3ySOI',
            {
                email: formData.email,
                password: formData.password,
                returnSecureToken: true
            })
            .then(res => {
                console.log(res);
                const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('userId', res.data.localId);

                dispatch(setAuthenticationTimeout(res.data.expiresIn));
                dispatch(authSuccess(res))
            })
            .catch(err => {
                console.log(err);
                dispatch(authFail(err));
            });
    }
};

export const signIn = (formData) => {
    return dispatch => {
        dispatch(authStart());
        axios.post(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD53-2WlO3YetKU-nE1-44xT0idJN3ySOI',
        {
            email: formData.email,
            password: formData.password,
            returnSecureToken: true
        })
        .then(res => {
            const expirationDate = new Date(new Date().getTime() + res.data.expiresIn * 1000);
            localStorage.setItem('token', res.data.idToken);
            localStorage.setItem('expirationDate', expirationDate);
            localStorage.setItem('userId', res.data.localId);

            dispatch(setAuthenticationTimeout(res.data.expiresIn));
            dispatch(authSuccess(res.data))
        })
        .catch(err => {
            console.log(err);
            dispatch(authFail(err));
        });
    }
};

export const checkAuthState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        console.log('checkAuthState', token, expirationDate);
        if (!token || expirationDate < new Date()) {
            dispatch(logout());
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(setAuthenticationTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
            dispatch(authSuccess({
                idToken: token,
                localId: userId
            }))
        }
    };
};
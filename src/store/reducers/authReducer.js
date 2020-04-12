import * as actionTypes from '../actions/actionTypes';
import {updateObject} from "../utility";

const initialState = {};

const authStart = (state) => {
    return updateObject(state, {error: null, loading: true})
};

const authSuccess = (state, action) => {
    console.log(action.idToken, action.userId);
    return updateObject(
        state,
        {
            token: action.token,
            userId: action.userId,
            error: null,
            loading: false,
        })
};

const authFailure = (state, action) => {
    return updateObject(
        state,
        {
            error: action.error,
            loading: false,

        })
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            return authStart(state);
        case actionTypes.AUTH_FAILURE:
            return authFailure(action, state);
        case actionTypes.AUTH_SUCCESS:
            return authSuccess(state, action);
        default: return state;
    }
};

export default authReducer;
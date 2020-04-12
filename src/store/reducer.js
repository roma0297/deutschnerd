import * as actionTypes from './actionTypes';

const initialState = {};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTH_START:
            console.log('Start event dispatched!!!');
            return state;
        default: return state;
    }
};

export default reducer;
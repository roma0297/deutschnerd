import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import authReducer from "./store/reducers/authReducer";
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const rootReducer = combineReducers({
    auth: authReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

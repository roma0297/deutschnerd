import React from 'react';
import {BrowserRouter} from "react-router-dom";
import {connect} from 'react-redux';
import * as actions from './store/index'
import Routes from "./components/Routes/Routes";

const App = (props) => {
  props.trySignInFromState();

  return (
      <BrowserRouter>
          <Routes/>
      </BrowserRouter>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        trySignInFromState: () => dispatch(actions.checkAuthState())
    };
};

export default connect(null, mapDispatchToProps)(App);

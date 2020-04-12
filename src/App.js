import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/fragments/Footer/Footer";
import Header from "./components/fragments/Header/Header";
import PageContent from "./components/fragments/PageContent/PageContent";
import {connect} from 'react-redux';
import * as actions from './store/index'

const App = (props) => {
  props.trySignInFromState();

  return (
      <BrowserRouter>
          <Header />
          <PageContent />
          <Footer />
      </BrowserRouter>
  );
};

const mapDispatchToProps = dispatch => {
    return {
        trySignInFromState: () => dispatch(actions.checkAuthState())
    };
};

export default connect(null, mapDispatchToProps)(App);

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/fragments/Footer/Footer";
import Header from "./components/fragments/Header/Header";
import PageContent from "./components/fragments/PageContent/PageContent";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import authReducer from './store/reducers/authReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    auth: authReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

function App() {
  return (
      <Provider store={store}>
          <BrowserRouter>
              <Header />
              <PageContent />
              <Footer />
          </BrowserRouter>
      </Provider>
  );
}

export default App;

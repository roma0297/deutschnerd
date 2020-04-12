import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
console.log(store);

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

import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";
import {AuthProvider} from "./context/authentication";

const App = () => {
  return (
      <AuthProvider>
          <BrowserRouter>
              <Routes/>
          </BrowserRouter>
      </AuthProvider>
  );
};


export default App;

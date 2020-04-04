import React from 'react';
import NavigationBar from "./components/NavigationBar/NavigationBar";
import {BrowserRouter} from "react-router-dom";
import Routes from "./components/Routes/Routes";

function App() {
  return (
      <BrowserRouter>
          <header>
            <NavigationBar />
          </header>
          <Routes/>
      </BrowserRouter>
  );
}

export default App;

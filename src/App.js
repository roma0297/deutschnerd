import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PageContent from "./components/PageContent/PageContent";

function App() {
  return (
      <BrowserRouter>
          <Header />
          <PageContent />
          <Footer />
      </BrowserRouter>
  );
}

export default App;

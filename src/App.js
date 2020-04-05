import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <div className='wrapper'>
            <Jumbotron />
            <div className="main">
              <Main />
            </div>
            <Footer />
          </div>
        </Route>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Main from './components/Main';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <Jumbotron />
        <div className="main">
          <Main />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;

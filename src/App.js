import React from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <Jumbotron />
        <Footer />
      </div>
    </>
  );
}

export default App;

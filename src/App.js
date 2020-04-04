import React from 'react';

import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='wrapper'>
        <Jumbotron />
      </div>
    </>
  );
}

export default App;

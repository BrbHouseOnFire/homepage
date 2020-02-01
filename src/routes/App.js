import React from 'react';
// import logo from './logo.svg';
import '../assets/css/App.css';
import '../components/Nav.js';
import '../components/Welcome.js';
import '../components/Trailer.js';

function App() {
  return (
    <>
      <Nav />
      <Welcome />
      <Trailer />
    </>
  );
}

export default App;

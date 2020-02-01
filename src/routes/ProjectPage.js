import React from 'react';
// import logo from './logo.svg';
import '../assets/css/App.css';
import '../components/Nav.js';
import '../components/ProjectList.js';
import '../components/Trailer.js';

function ProjectPage() {
  return (
    <>
      <Nav />
      <ProjectList />
      <Trailer />
    </>
  );
}

export default ProjectPage;

import React, { useRef }  from 'react';
// import { HashRouter, Routes, BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
// import Main from './components/Main';

// import './App.css';

function App() {
  const myRef = useRef({ About, Skills, Projects, Contact })
  return (

  <main className="bg-gray-100 px-10 md:px-20 lg:px:40">
    <section className="min-h-screen">
      <Navbar myRef = {myRef}/>
      <About myRef = {myRef} />
      <Skills myRef = {myRef}/>
      <Projects myRef = {myRef}/>
      <Contact myRef = {myRef}/> 

    </section>
  </main>

  );
}

export default App;

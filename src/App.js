import logo from './logo.svg';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// import './App.css';

function App() {
  return (
  <>
    <head>
        <title>Roodolph Senecal</title>
        <meta name="description" content="Roodolph Portfolio Page"></meta>
    </head>
    <main className="bg-white px-10">
    <Navbar />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </main>
  </>
  );
}

export default App;

import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// import './App.css';

function App() {
  return (
  <>

    <main className="bg-gray-100 px-10 md:px-20 lg:px:40">
    <section className="min-h-screen">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </section>
  </main>
  </>
  );
}

export default App;

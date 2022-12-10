import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { HashRouter, Routes, BrowserRouter, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
// import Navbar from './components/Navbar';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <HashRouter>
//     <App />
//     </HashRouter>
//   </React.StrictMode>
// );




root.render(

  <App />
  // <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={<About />}>
  //         <Route index element={<Projects/>} />
  //         <Route path="skills" element={<Skills />} />
  //         <Route path="contact" element={<Contact />} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Mentors from './pages/Mentors';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';



function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/mentors" element={<Mentors/>}/>
        <Route path="*" element={<NotFound/>}/>


      </Routes>

    </Router>
  );
}

export default App;
